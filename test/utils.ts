import * as fs from 'fs';
import * as path from 'path';
import { assert } from 'chai';
import { transformFileSync, BabelFileResult } from '@babel/core';
import { PluginOptions } from '../src/types';
import consoleTransformPlugin from '../src/index';

const transform = (
  inputFilePath: string,
  pluginOptions: PluginOptions,
  callback?: (res: BabelFileResult) => void,
): void => {
  const res = transformFileSync(inputFilePath, {
    babelrc: false,
    configFile: false,
    plugins: [[consoleTransformPlugin, pluginOptions]],
  });
  callback && callback(res);
};

const assertFileTransformThrows = (
  inputFilePath: string,
  pluginOptions: PluginOptions,
  matchRegexp: RegExp,
): void => {
  assert.throws(
    () => {
      transform(inputFilePath, pluginOptions as PluginOptions);
    },
    Error,
    matchRegexp,
  );
};

const assertFileTransformResultEqual = (
  inputFilePathRelativeToFixturesDir: string,
  outputFilePath: string,
  pluginOptions: PluginOptions,
): void => {
  const actualFilePath = path.resolve(
    __dirname,
    './fixtures/',
    inputFilePathRelativeToFixturesDir,
  );
  const expectedFilePath = path.resolve(
    __dirname,
    './fixtures/',
    outputFilePath,
  );

  transform(actualFilePath, pluginOptions, res => {
    assert.equal(
      res.code,
      fs.readFileSync(expectedFilePath, {
        encoding: 'utf-8',
      }),
    );
  });
};

export { assertFileTransformThrows, assertFileTransformResultEqual };
