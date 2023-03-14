"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const express_1 = require("express");
const users_json_1 = __importDefault(require("../../../data/users.json"));
exports.userController = (function () {
    const userRouter = (0, express_1.Router)();
    userRouter.get('/user', (_req, _res) => {
        _res.json(users_json_1.default);
    });
    return userRouter;
})();
