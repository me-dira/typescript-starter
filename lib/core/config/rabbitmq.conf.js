"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQConfig = void 0;
exports.RabbitMQConfig = {
    serverUrl: process.env.RABBITMQ_SERVER_URL,
    username: process.env.RABBITMQ_DEFAULT_USER,
    password: process.env.RABBITMQ_DEFAULT_PASS,
};
