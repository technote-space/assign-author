import {getAssignees} from '../../src/utils/context';
import {getContext} from '../util';

describe('getAssignees', () => {
    it('should get assignees', () => {
        expect(getAssignees(getContext({
            payload: {
                sender: {
                    type: 'User',
                    login: 'test',
                },
                issue: {
                    assignees: [],
                },
            },
        }))).toEqual(['test']);
    });

    it('should empty', () => {
        expect(getAssignees(getContext({
            payload: {
                sender: {
                    type: 'User',
                    login: 'test',
                },
                issue: {
                    assignees: [
                        {login: 'test'},
                        {login: 'test2'},
                    ],
                },
            },
        }))).toEqual([]);
    });

    it('should return false 1', () => {
        expect(getAssignees(getContext({
            payload: {
                issue: {
                    assignees: [],
                },
            },
        }))).toBeFalsy();
    });

    it('should return false 2', () => {
        expect(getAssignees(getContext({
            payload: {
                sender: {
                    type: 'User',
                    login: 'test',
                },
                issue: {},
            },
        }))).toBeFalsy();
    });
});
