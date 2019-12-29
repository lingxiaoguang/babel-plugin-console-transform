import * as path from 'path';
import { assertFileTransformThrows } from './utils';
import { PluginOptions } from '../src/types';
describe('options格式测试', () => {
  const inputFilePath = path.resolve(
    __dirname,
    './fixtures/production/drop-all-console/actual.js',
  );

  it('env缺失会报错', () => {
    const pluginOptions = {};
    assertFileTransformThrows(
      inputFilePath,
      pluginOptions as PluginOptions,
      new RegExp(".*configuration misses the property 'env'*"),
    );
  });

  it('env只能传字符串', () => {
    const pluginOptions = {
      env: 1,
    };
    assertFileTransformThrows(
      inputFilePath,
      (pluginOptions as any) as PluginOptions,
      new RegExp('.*configuration.env should be a string.*'),
    );
  });

  it('removeMethods的元素只能是string或者function', () => {
    const pluginOptions = {
      env: 'production',
      removeMethods: [1],
    };
    assertFileTransformThrows(
      inputFilePath,
      (pluginOptions as any) as PluginOptions,
      new RegExp(
        '.*configuration.removeMethods[.*] should be one of these:s[ ]{3}string | function.*',
      ),
    );
  });

  it('additionalStyleMethods只能是对象', () => {
    const pluginOptions: any = {
      env: 'production',
      additionalStyleMethods: [],
    };
    assertFileTransformThrows(
      inputFilePath,
      pluginOptions as PluginOptions,
      new RegExp(
        '.*configuration.additionalStyleMethods should be an object.*',
      ),
    );
  });
});
