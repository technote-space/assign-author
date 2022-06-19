import type { Context } from '@actions/github/lib/context';
import type { Octokit } from '@technote-space/github-action-helper/dist/types';
import type { Logger } from '@technote-space/github-action-log-helper';
import { getAssignees } from './utils/context';
import { addAssignees } from './utils/github';

export const execute = async(logger: Logger, octokit: Octokit, context: Context): Promise<void> => addAssignees(getAssignees(context), octokit, logger, context);
