import { resolve } from 'path';
import { setFailed } from '@actions/core';
import { Context } from '@actions/github/lib/context';
import { isTargetEvent } from '@technote-space/filter-github-action';
import { ContextHelper, Utils } from '@technote-space/github-action-helper';
import { Logger } from '@technote-space/github-action-log-helper';
import { execute } from './process';
import { TARGET_EVENTS } from './constant';

const run = async(): Promise<void> => {
  const logger  = new Logger();
  const context = new Context();
  ContextHelper.showActionInfo(resolve(__dirname, '..'), logger, context);

  if (!isTargetEvent(TARGET_EVENTS, context)) {
    logger.info('This is not target event.');
    return;
  }

  await execute(logger, Utils.getOctokit(), context);
};

run().catch(error => {
  console.log(error);
  setFailed(error.message);
});
