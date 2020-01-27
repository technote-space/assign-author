import { Context } from '@actions/github/lib/context';
import { ContextHelper } from '@technote-space/github-action-helper';

const getCurrentAssignees = (context: Context): string[] | false => {
	if ('issues' === context.eventName) {
		return context.payload.issue && 'assignees' in context.payload.issue ? context.payload.issue.assignees.map(assignee => assignee.login) : false;
	}

	if ('pull_request' === context.eventName) {
		return context.payload.pull_request && 'assignees' in context.payload.pull_request ? context.payload.pull_request.assignees.map(assignee => assignee.login) : false;
	}

	return false;
};

export const getAssignees = (context: Context): string[] | false => {
	const sender = ContextHelper.getSender(context);
	if (false === sender) {
		return false;
	}

	const assignees = getCurrentAssignees(context);
	if (false === assignees) {
		return false;
	}

	if (assignees.includes(sender)) {
		return [];
	}

	return [sender];
};
