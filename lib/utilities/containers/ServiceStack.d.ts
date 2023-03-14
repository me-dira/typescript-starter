/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class ServiceStack extends EventEmitter {
    private static _instance;
    private constructor();
    static getInstance(): ServiceStack;
}
