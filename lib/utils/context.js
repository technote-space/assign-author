"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssignees = void 0;
const github_action_helper_1 = require("@technote-space/github-action-helper");
const getCurrentAssignees = (context) => {
    if ('issues' === context.eventName) {
        return context.payload.issue && 'assignees' in context.payload.issue ? context.payload.issue.assignees.map(assignee => assignee.login) : false;
    }
    if ('pull_request' === context.eventName || 'pull_request_target' === context.eventName) {
        return context.payload.pull_request && 'assignees' in context.payload.pull_request ? context.payload.pull_request.assignees.map(assignee => assignee.login) : false;
    }
    return false;
};
const getAssignees = (context) => {
    const sender = github_action_helper_1.ContextHelper.getSender(context);
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
exports.getAssignees = getAssignees;
