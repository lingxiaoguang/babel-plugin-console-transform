import { PluginOptions } from './types';
declare const isMatch: (removeMethods: (string | Function)[], methodName: string, args: any[]) => boolean;
declare const validateSchema: (schema: object, options: PluginOptions) => void;
export { isMatch, validateSchema };
