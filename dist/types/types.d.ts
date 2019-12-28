export interface PluginOptions {
    env?: string;
    removeMethods?: Array<string | Function>;
    additionalStyleMethods?: {
        [key: string]: string;
    };
}
export interface ConsoleTransformState {
    opts: PluginOptions;
    file: any;
}
