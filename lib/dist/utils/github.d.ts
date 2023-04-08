import type { Context } from '@actions/github/lib/context';
import type { Octokit } from '@technote-space/github-action-helper';
import type { Logger } from '@technote-space/github-action-log-helper';
export declare const addAssignees: (assignees: string[] | false, octokit: Octokit, logger: Logger, context: Context) => Promise<void>;
