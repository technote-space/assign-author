const fs = require('fs');
const path = require('path');

export const getContext = (override: object) => Object.assign({
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

export const getApiFixture = (name: string) => JSON.parse(fs.readFileSync(path.resolve(__dirname, `./fixtures/${name}.json`)));

export const disableNetConnect = nock => {
    beforeEach(() => {
        nock.disableNetConnect();
    });

    afterEach(() => {
        nock.cleanAll();
        nock.enableNetConnect();
    });
};
