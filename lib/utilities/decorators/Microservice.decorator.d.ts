export declare function Microservice<T extends {
    new (..._args: any[]): {};
}>(constructor: T): {
    new (..._args: any[]): {};
} & T;
