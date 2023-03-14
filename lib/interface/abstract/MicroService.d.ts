import { IAPIsConfig } from '@interface/shared/IAPIsConfig';
import { IMicroService } from '@interface/shared/IMicroService';
import express from 'express';
export declare abstract class MicroService implements IMicroService {
    protected _config: IAPIsConfig;
    constructor(config: IAPIsConfig);
    abstract run(): void;
    abstract stop(): void;
    protected _generateExpressApp(): express.Express;
    protected listenToServices(): void;
}
