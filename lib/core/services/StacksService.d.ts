import { CoreService } from '@interface/abstract/CoreService';
export declare class CoreServiceStack extends CoreService {
    static _instance: CoreServiceStack;
    private constructor();
    static instance(): CoreServiceStack;
    register(): void;
    listen(): void;
}
