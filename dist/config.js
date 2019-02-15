"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEBUG_SUBPROCESS = exports.SUITE_OWN_OPTIONS = exports.SUBPROCESS_RETRIED_SUITE_ID = exports.RUNNABLE_MESSAGE_CHANNEL_PROP = void 0;
exports.RUNNABLE_MESSAGE_CHANNEL_PROP = '__mpt_randomId__';
exports.SUBPROCESS_RETRIED_SUITE_ID = '__mpt_suiteId_';
exports.SUITE_OWN_OPTIONS = [
    'timeout',
    'enableTimeouts',
    'slow',
    'bail',
    'retries',
];
exports.DEBUG_SUBPROCESS = {
    argument: '--debug-mpt-subprocess',
    yargs: 'debugMptSubprocess',
};
//# sourceMappingURL=config.js.map