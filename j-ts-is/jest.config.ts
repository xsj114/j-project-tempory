import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    "preset": "ts-jest",
    "verbose": true,
    "testMatch": ['**/test/*.(test|spec).[jt]s'],
    "testEnvironment": "jsdom",
    "coverageReporters": ["text", "text-summary"]
};


export default config;
