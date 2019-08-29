import nock from 'nock';
import {GitHub} from '@actions/github' ;
import {addAssignees} from '../../src/utils/github';
import {disableNetConnect, getApiFixture, getContext} from '../util';

describe('addAssignees', () => {
    disableNetConnect(nock);

    it('should do nothing 1', async () => {
        const fn = jest.fn();
        nock('https://api.github.com')
            .post('/repos/hello/world/issues/1/assignees')
            .reply(200, (uri, body) => {
                fn();
                return body;
            });

        await addAssignees(false, new GitHub(''), getContext({
            repo: {
                owner: 'hello',
                repo: 'world',
            },
        }));

        expect(fn).not.toBeCalled();
    });

    it('should do nothing 2', async () => {
        const fn = jest.fn();
        nock('https://api.github.com')
            .post('/repos/hello/world/issues/1/assignees')
            .reply(200, (uri, body) => {
                fn();
                return body;
            });

        await addAssignees([], new GitHub(''), getContext({
            repo: {
                owner: 'hello',
                repo: 'world',
            },
        }));

        expect(fn).not.toBeCalled();
    });

    it('should add assignees', async () => {
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
                return getApiFixture('repos.issues.assignees');
            });

        await addAssignees([
            'test',
        ], new GitHub(''), getContext({
            repo: {
                owner: 'hello',
                repo: 'world',
            },
        }));

        expect(fn1).toBeCalledTimes(1);
        expect(fn2).toBeCalledTimes(1);
    });
});
