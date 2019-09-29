/* eslint-disable no-magic-numbers */
import { generateContext } from '@technote-space/github-action-test-helper';
import { isTargetEvent } from '@technote-space/filter-github-action';
import { TARGET_EVENTS } from '../../src/constant';

describe('isTargetEvent', () => {
	it('should return true 1', () => {
		expect(isTargetEvent(TARGET_EVENTS, generateContext({event: 'issues', action: 'opened'}))).toBeTruthy();
	});

	it('should return true 2', () => {
		expect(isTargetEvent(TARGET_EVENTS, generateContext({event: 'pull_request', action: 'opened'}))).toBeTruthy();
	});

	it('should return true 3', () => {
		expect(isTargetEvent(TARGET_EVENTS, generateContext({event: 'pull_request', action: 'rerequested'}))).toBeTruthy();
	});

	it('should return false 1', () => {
		expect(isTargetEvent(TARGET_EVENTS, generateContext({event: 'push', action: 'opened'}))).toBeFalsy();
	});

	it('should return false 2', () => {
		expect(isTargetEvent(TARGET_EVENTS, generateContext({event: 'issues', action: 'closed'}))).toBeFalsy();
	});
});
