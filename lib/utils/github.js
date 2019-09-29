"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAssignees = (assignees, octokit, logger, context) => __awaiter(void 0, void 0, void 0, function* () {
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
        yield octokit.issues.addAssignees({
            owner: context.repo.owner,
            repo: context.repo.repo,
            'issue_number': context.issue.number,
            assignees: assignees,
        });
    }
    catch (error) {
        if ('Resource not accessible by integration' === error.message) {
            logger.warn(error.message);
        }
        else {
            throw error;
        }
    }
});
