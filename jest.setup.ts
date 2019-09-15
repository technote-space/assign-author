declare module NodeJS {
	interface Global {
		mockSignale: {
			info: jest.Mock,
			warn: jest.Mock
		}
	}
}

global.mockSignale = {
	info: jest.fn(),
	warn: jest.fn(),
};
jest.mock('signale', () => ({
	...jest.requireActual('signale'),
	info: global.mockSignale.info,
	warn: global.mockSignale.warn,
}));
