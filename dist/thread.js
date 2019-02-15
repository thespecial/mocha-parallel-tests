"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportsWorkerThreads = void 0;
function supportsWorkerThreads() {
    try {
        require('worker_threads');
        return true;
    }
    catch (ex) {
        return false;
    }
}
exports.supportsWorkerThreads = supportsWorkerThreads;
//# sourceMappingURL=thread.js.map