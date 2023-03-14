"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceStack = void 0;
const events_1 = require("events");
class ServiceStack extends events_1.EventEmitter {
    constructor() {
        super();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ServiceStack();
        }
        return this._instance;
    }
}
exports.ServiceStack = ServiceStack;
