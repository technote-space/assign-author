import type { Octokit } from '@technote-space/github-action-helper';
import type { Context } from '@actions/github/lib/context';
import type { Logger } from '@technote-space/github-action-log-helper';

export const addAssignees = async(assignees: string[] | false, octokit: Octokit, logger: Logger, context: Context): Promise<void> => {
  if (false === assignees) {
    logger.warn('Invalid target.');
    return;
  }

  logger.info('Adding assignees');
  logger.info(assignees);

  if (!assignees.length) {
    logger.info('do nothing...');
    return;
  }

  try {
    await octokit.rest.issues.addAssignees({
      owner: context.repo.owner,
      repo: context.repo.repo,
      'issue_number': context.issue.number,
      assignees: assignees,
    });
  } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
    if ('Resource not accessible by integration' === error.message) {
      logger.warn(error.message);
    } else {
      throw error;
    }
  }
};
