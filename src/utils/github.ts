import signale from 'signale';
import {GitHub} from '@actions/github/lib/github';
import {Context} from '@actions/github/lib/context';

export const addAssignees = async (assignees: string[] | false, octokit: GitHub, context: Context) => {
    if (false === assignees) {
        signale.warn('Invalid target.');
        signale.info(context.issue);
        return;
    }

    signale.info('Adding assignees');
    signale.info(assignees);

    if (!assignees.length) return;

    await octokit.issues.addAssignees({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        assignees: assignees,
    });
};
