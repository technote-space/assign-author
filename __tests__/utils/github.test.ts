/* eslint-disable no-magic-numbers */
import { describe, expect, it, vi } from 'vitest';
import nock from 'nock';
import path from 'path';
import {Logger} from '@technote-space/github-action-log-helper';
import {disableNetConnect, getApiFixture, getContext, spyOnStdout, stdoutCalledWith, getOctokit} from '@technote-space/github-action-test-helper';
import {addAssignees} from '../../src/utils/github';

describe('addAssignees', () => {
  disableNetConnect(nock);

  const logger  = new Logger();
  const octokit = getOctokit();

  it('should do nothing 1', async() => {
    const fn = vi.fn();
    nock('https://api.github.com')
      .post('/repos/hello/world/issues/1/assignees')
      .reply(200, (uri, body) => {
        fn();
        return body;
      });

    await addAssignees(false, octokit, logger, getContext({
      repo: {
        owner: 'hello',
        repo: 'world',
      },
    }));

    expect(fn).not.toBeCalled();
  });

  it('should do nothing 2', async() => {
    const fn = vi.fn();
    nock('https://api.github.com')
      .post('/repos/hello/world/issues/1/assignees')
      .reply(200, (uri, body) => {
        fn();
        return body;
      });

    await addAssignees([], octokit, logger, getContext({
      repo: {
        owner: 'hello',
        repo: 'world',
      },
    }));

    expect(fn).not.toBeCalled();
  });

  it('should do nothing 3', async() => {
    const fn1        = vi.fn();
    const fn2        = vi.fn();
    const mockStdout = spyOnStdout();
    nock('https://api.github.com')
      .post('/repos/hello/world/issues/1/assignees', body => {
        fn1();
        expect(body).toHaveProperty('assignees');
        expect(body.assignees).toEqual(['test']);
        return body;
      })
      .reply(403, () => {
        fn2();
        return getApiFixture(path.resolve(__dirname, '../fixtures'), 'repos.issues.assignees.403');
      });

    await addAssignees([
      'test',
    ], octokit, logger, getContext({
      repo: {
        owner: 'hello',
        repo: 'world',
      },
    }));

    expect(fn1).toBeCalledTimes(1);
    expect(fn2).toBeCalledTimes(1);
    stdoutCalledWith(mockStdout, [
      '> Adding assignees',
      '> test',
      '::warning::Resource not accessible by integration',
    ]);
  });

  it('should do nothing 4', async() => {
    const fn         = vi.fn();
    const mockStdout = spyOnStdout();
    nock('https://api.github.com')
      .post('/repos/hello/world/issues/1/assignees', body => {
        fn();
        expect(body).toHaveProperty('assignees');
        expect(body.assignees).toEqual(['test']);
        return body;
      })
      .reply(500, 'test');

    await expect(addAssignees([
      'test',
    ], octokit, logger, getContext({
      repo: {
        owner: 'hello',
        repo: 'world',
      },
    }))).rejects.toThrow(new Error('test'));

    expect(fn).toBeCalledTimes(1);
    stdoutCalledWith(mockStdout, [
      '> Adding assignees',
      '> test',
    ]);
  });

  it('should add assignees', async() => {
    const fn1 = vi.fn();
    const fn2 = vi.fn();
    nock('https://api.github.com')
      .post('/repos/hello/world/issues/1/assignees', body => {
        fn1();
        expect(body).toHaveProperty('assignees');
        expect(body.assignees).toEqual(['test']);
        return body;
      })
      .reply(201, () => {
        fn2();
        return getApiFixture(path.resolve(__dirname, '../fixtures'), 'repos.issues.assignees');
      });

    await addAssignees([
      'test',
    ], octokit, logger, getContext({
      repo: {
        owner: 'hello',
        repo: 'world',
      },
    }));

    expect(fn1).toBeCalledTimes(1);
    expect(fn2).toBeCalledTimes(1);
  });
});
