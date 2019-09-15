import signale from 'signale';
import { GitHub } from '@actions/github/lib/github';
import { Context } from '@actions/github/lib/context';

export const addAssignees = async(assignees: string[] | false, octokit: GitHub, context: Context): Promise<void> => {
	if (false === assignees) {
		signale.warn('Invalid target.');
		signale.info(context.issue);
		return;
	}

	signale.info('Adding assignees');
	signale.info(assignees);

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
			signale.warn(error.message);
		} else {
			throw error;
		}
	}
};
