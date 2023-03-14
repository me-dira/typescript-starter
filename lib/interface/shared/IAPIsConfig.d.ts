export interface IAPIsConfig {
    transport?: 'RMQ';
    options: {
        urls: string[];
        queue: string;
        queueOptions: {
            durable: boolean;
        };
    };
}
