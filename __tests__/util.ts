import { Context } from '@actions/github/lib/context';
import * as fs from 'fs';
import * as path from 'path';

export const getContext = (override: object): Context => Object.assign({
	payload: {
		action: '',
	},
	eventName: '',
	sha: '',
	ref: '',
	workflow: '',
	action: '',
	actor: '',
	issue: {
		owner: '',
		repo: '',
		number: 1,
	},
	repo: {
		owner: '',
		repo: '',
	},
}, override);

export const getApiFixture = (name: string): object => JSON.parse(fs.readFileSync(path.resolve(__dirname, `./fixtures/${name}.json`)).toString());

export const disableNetConnect = (nock): void => {
	beforeEach(() => {
		nock.disableNetConnect();
	});

	afterEach(() => {
		nock.cleanAll();
		nock.enableNetConnect();
	});
};
