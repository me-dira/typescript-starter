"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroService = void 0;
const express_1 = __importDefault(require("express"));
class MicroService {
    constructor(config) {
        this._config = config;
    }
    // ------------------------------------------------Private methods|
    _generateExpressApp() {
        return (0, express_1.default)();
    }
    listenToServices() { }
}
exports.MicroService = MicroService;
