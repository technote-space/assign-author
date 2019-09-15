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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signale_1 = __importDefault(require("signale"));
exports.addAssignees = (assignees, octokit, context) => __awaiter(void 0, void 0, void 0, function* () {
    if (false === assignees) {
        signale_1.default.warn('Invalid target.');
        signale_1.default.info(context.issue);
        return;
    }
    signale_1.default.info('Adding assignees');
    signale_1.default.info(assignees);
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
            signale_1.default.warn(error.message);
        }
        else {
            throw error;
        }
    }
});
