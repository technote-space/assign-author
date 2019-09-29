import { GitHub } from '@actions/github/lib/github';
import { Context } from '@actions/github/lib/context';
import { Logger } from '@technote-space/github-action-helper';

export const addAssignees = async(assignees: string[] | false, octokit: GitHub, logger: Logger, context: Context): Promise<void> => {
	if (false === assignees) {
		logger.warn('Invalid target.');
		return;
	}

	logger.info('Adding assignees');
	logger.info(assignees);

	if (!assignees.length) {
		return;
	}

	try {
		await octokit.issues.addAssignees({
			owner: context.repo.owner,
			repo: context.repo.repo,
			'issue_number': context.issue.number,
			assignees: assignees,
		});
	} catch (error) {
		if ('Resource not accessible by integration' === error.message) {
			logger.warn(error.message);
		} else {
			throw error;
		}
	}
};
