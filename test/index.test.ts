import { transformFileSync } from '@babel/core';
import * as fs from 'fs';
import * as path from 'path';
import consoleTransformPlugin from '../src/index';
import * as assert from 'assert';

describe('console transform插件', () => {
    //TODO: add test 
    // it('应该删除console.xxx方法', () => {
    //     // read
    //     const actualFilePath = path.resolve(__dirname, './fixtures/no-console/actual.js');
    //     const expectedFilePath = path.resolve(__dirname, './fixtures/no-console/expected.js');

    //     const res = transformFileSync(actualFilePath, {
    //         babelrc: false,
    //         configFile: false,
    //         plugins: [
    //             [
    //                 consoleTransformPlugin,
    //                 {
    //                     env: 'development',
    //                     removeMethods: ['log', 'warn', 'time'],
    //                     additionalStyleMethod: {
    //                         'success': 'padding:20px; color: blue;background:pink;'
    //                     }
    //                 }
    //             ]
    //         ]
    //     })
    //     console.log(res.code)
    //     assert(!res.code.includes('console.'))
    // })
})