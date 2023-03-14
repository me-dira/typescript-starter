export declare class RabbitMQProvider {
    private static _instance;
    private constructor();
    static getInstance(): RabbitMQProvider;
    getConnection(): void;
}
