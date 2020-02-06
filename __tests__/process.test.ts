/* eslint-disable no-magic-numbers */
import nock from 'nock';
import path from 'path';
import { Logger } from '@technote-space/github-action-helper';
import { disableNetConnect, getApiFixture, getContext, getOctokit } from '@technote-space/github-action-test-helper';
import { execute } from '../src/process';

describe('execute', () => {
	disableNetConnect(nock);

	const logger  = new Logger();
	const octokit = getOctokit();

	it('should add assignees', async() => {
		const fn1 = jest.fn();
		const fn2 = jest.fn();
		nock('https://api.github.com')
			.post('/repos/hello/world/issues/1/assignees', body => {
				fn1();
				expect(body).toHaveProperty('assignees');
				expect(body.assignees).toEqual(['test']);
				return body;
			})
			.reply(201, () => {
				fn2();
				return getApiFixture(path.resolve(__dirname, 'fixtures'), 'repos.issues.assignees');
			});

		await execute(logger, octokit, getContext({
			repo: {
				owner: 'hello',
				repo: 'world',
			},
			eventName: 'pull_request',
			payload: {
				sender: {
					type: 'User',
					login: 'test',
				},
				'pull_request': {
					assignees: [],
				},
			},
		}));

		expect(fn1).toBeCalledTimes(1);
		expect(fn2).toBeCalledTimes(1);
	});
});
