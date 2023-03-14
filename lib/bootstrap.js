"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const user_api_1 = require("@domain/user/user.api");
exports.bootstrap = (function () {
    return {
        init: () => {
            /**
             * Run every service on a different process
             */
            (0, user_api_1.userApi)({
                options: {
                    urls: ['http://localhost'],
                    queue: '',
                    queueOptions: {
                        durable: true,
                    },
                },
            });
        },
    };
})();
