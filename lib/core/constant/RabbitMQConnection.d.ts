import * as amqp from 'amqplib';
declare const connection: Promise<amqp.Connection>;
export declare class RabbitMQProvider {
    private static _instance;
    constructor();
    static getInstance(): RabbitMQProvider;
    getConnection(): typeof connection;
}
export {};
