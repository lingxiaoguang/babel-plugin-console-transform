import BabelCore, { PluginObj } from '@babel/core';
import { ConsoleTransformState } from './types';
export default function ({ types }: typeof BabelCore): PluginObj<ConsoleTransformState>;
