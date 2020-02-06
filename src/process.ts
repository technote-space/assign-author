import { Context } from '@actions/github/lib/context';
import { Octokit } from '@octokit/rest';
import { Logger } from '@technote-space/github-action-helper';
import { getAssignees } from './utils/context';
import { addAssignees } from './utils/github';

export const execute = async(logger: Logger, octokit: Octokit, context: Context): Promise<void> => addAssignees(getAssignees(context), octokit, logger, context);
