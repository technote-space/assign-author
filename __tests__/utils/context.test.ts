/* eslint-disable no-magic-numbers */
import { getContext } from '@technote-space/github-action-test-helper';
import { getAssignees } from '../../src/utils/context';

describe('getAssignees', () => {
	it('should get issue assignees', () => {
		expect(getAssignees(getContext({
			eventName: 'issues',
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

	it('should get PR assignees', () => {
		expect(getAssignees(getContext({
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
		}))).toEqual(['test']);
	});

	it('should empty 1', () => {
		expect(getAssignees(getContext({
			eventName: 'issues',
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

	it('should empty 2', () => {
		expect(getAssignees(getContext({
			eventName: 'pull_request',
			payload: {
				sender: {
					type: 'User',
					login: 'test',
				},
				'pull_request': {
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
			eventName: 'issues',
			payload: {
				issue: {
					assignees: [],
				},
			},
		}))).toBeFalsy();
	});

	it('should return false 2', () => {
		expect(getAssignees(getContext({
			eventName: 'issues',
			payload: {
				sender: {
					type: 'User',
					login: 'test',
				},
				issue: {},
			},
		}))).toBeFalsy();
	});

	it('should return false 3', () => {
		expect(getAssignees(getContext({
			eventName: 'pull_request',
			payload: {
				sender: {
					type: 'User',
					login: 'test',
				},
				'pull_request': {},
			},
		}))).toBeFalsy();
	});

	it('should return false 4', () => {
		expect(getAssignees(getContext({
			eventName: 'push',
			payload: {
				sender: {
					type: 'User',
					login: 'test',
				},
				issue: {
					assignees: [],
				},
			},
		}))).toBeFalsy();
	});
});
