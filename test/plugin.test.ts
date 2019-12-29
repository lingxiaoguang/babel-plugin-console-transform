import { assertFileTransformResultEqual } from './utils';
import { PluginOptions } from '../src/types';

describe('plugin逻辑测试', () => {
  describe('production环境', () => {
    it('默认会删除所有的console', () => {
      const pluginOptions: PluginOptions = {
        env: 'production',
      };
      assertFileTransformResultEqual(
        'production/drop-all-console/actual.js',
        'production/drop-all-console/expected.js',
        pluginOptions,
      );
    });
    it('可以通过name删除指定console,支持glob', () => {
      const pluginOptions: PluginOptions = {
        env: 'production',
        removeMethods: ['time*'],
      };
      assertFileTransformResultEqual(
        'production/drop-console-by-name/actual.js',
        'production/drop-console-by-name/expected.js',
        pluginOptions,
      );
    });
    it('可以通过function删除指定参数的console', () => {
      const pluginOptions: PluginOptions = {
        env: 'production',
        removeMethods: [
          (args: any[]) => {
            return !args.includes(222);
          },
        ],
      };
      assertFileTransformResultEqual(
        'production/drop-console-by-function/actual.js',
        'production/drop-console-by-function/expected.js',
        pluginOptions,
      );
    });
  });

  describe('其他环境', () => {
    it('非扩展方法不做处理', () => {
      const pluginOptions: PluginOptions = {
        env: 'development',
      };
      assertFileTransformResultEqual(
        'other/non-extended-method/actual.js',
        'other/non-extended-method/expected.js',
        pluginOptions,
      );
    });
    it('默认扩展了red 、green、blue、orange、 bgRed、bgGreen等方法，并且添加了行列数', () => {
      const pluginOptions: PluginOptions = {
        env: 'development',
      };
      assertFileTransformResultEqual(
        'other/default-extended-method/actual.js',
        'other/default-extended-method/expected.js',
        pluginOptions,
      );
    });
    it('可以通过additionalStyleMethods扩展方法，并且也会添加行列数', () => {
      const pluginOptions: PluginOptions = {
        env: 'development',
        additionalStyleMethods: {
          success:
            'padding:20px; background:green;color:#fff;font-weight:bold',
        },
      };
      assertFileTransformResultEqual(
        'other/extended-method-by-user/actual.js',
        'other/extended-method-by-user/expected.js',
        pluginOptions,
      );
    });
    it('可以覆盖原生的log等方法', () => {
      const pluginOptions: PluginOptions = {
        env: 'development',
        additionalStyleMethods: {
          log: 'padding:20px; background:green;color:#fff;font-weight:bold',
        },
      };
      assertFileTransformResultEqual(
        'other/override-native-method/actual.js',
        'other/override-native-method/expected.js',
        pluginOptions,
      );
    });
  });
});
