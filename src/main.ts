import path from 'path';
import { setFailed, getInput } from '@actions/core';
import { context, GitHub } from '@actions/github';
import { isTargetEvent } from '@technote-space/filter-github-action';
import { Logger, Utils } from '@technote-space/github-action-helper';
import { getAssignees } from './utils/context';
import { addAssignees } from './utils/github';
import { TARGET_EVENTS } from './constant';

const {showActionInfo} = Utils;

/**
 * run
 */
async function run(): Promise<void> {
	try {
		const logger = new Logger();
		showActionInfo(path.resolve(__dirname, '..'), logger, context);

		if (!isTargetEvent(TARGET_EVENTS, context)) {
			logger.info('This is not target event.');
			return;
		}

		await addAssignees(getAssignees(context), new GitHub(getInput('GITHUB_TOKEN', {required: true})), logger, context);
	} catch (error) {
		setFailed(error.message);
	}
}

run();
