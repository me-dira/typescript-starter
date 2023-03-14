"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreServiceStack = void 0;
const CoreService_1 = require("@interface/abstract/CoreService");
class CoreServiceStack extends CoreService_1.CoreService {
    constructor() {
        super();
    }
    static instance() {
        if (!this._instance) {
            this._instance = new CoreServiceStack();
        }
        return this._instance;
    }
    register() { }
    listen() { }
}
exports.CoreServiceStack = CoreServiceStack;
