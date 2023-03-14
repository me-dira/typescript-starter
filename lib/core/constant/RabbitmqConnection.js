"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQProvider = void 0;
class RabbitMQProvider {
    constructor() { }
    static getInstance() {
        if (!this._instance) {
            this._instance = new RabbitMQProvider();
        }
        return this._instance;
    }
    getConnection() { }
}
exports.RabbitMQProvider = RabbitMQProvider;
