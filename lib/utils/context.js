"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssignees = (context) => {
    const sender = getSender(context);
    if (false === sender)
        return false;
    const assignees = getCurrentAssignees(context);
    if (false === assignees)
        return false;
    if (assignees.includes(sender))
        return [];
    return [sender];
};
const getSender = (context) => context.payload.sender && context.payload.sender.type === 'User' ? context.payload.sender.login : false;
const getCurrentAssignees = (context) => context.payload.issue && 'assignees' in context.payload.issue ? context.payload.issue.assignees.map(assignee => assignee.login) : false;
