"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userApi = void 0;
const user_controller_1 = require("@domain/user/controller/user.controller");
const express_1 = __importDefault(require("express"));
exports.userApi = (function () {
    return (_config) => {
        const userApp = (0, express_1.default)();
        userApp.use(user_controller_1.userController);
        userApp.listen(3001, () => {
            console.log('hello and welcome');
        });
    };
})();
