import BabelCore, { PluginObj } from '@babel/core';
import styles from './styles';
import { ConsoleTransformState } from './types';
import { isMatch, validateSchema } from './utils';
import schema from './schema';

export default function({
  types,
}: typeof BabelCore): PluginObj<ConsoleTransformState> {
  return {
    name: 'console-transform',
    visitor: {
      CallExpression(path, { opts, file }) {
        validateSchema(schema, opts);
        const { env, removeMethods, additionalStyleMethods } = opts;
        const callee = path.get('callee');
        if (
          callee.node.type === 'MemberExpression' &&
          (callee.node.object as any).name === 'console'
        ) {
          const methodName = callee.node.property.name as string;
          if (env === 'production') {
            if (removeMethods) {
              const args = path.node.arguments.map(
                item => (item as any).value,
              );
              if (isMatch(removeMethods, methodName, args)) {
                return path.remove();
              }
              return;
            }
            return path.remove();
          } else {
            const lineNum = path.node.loc.start.line;
            const columnNum = path.node.loc.start.column;

            const allStyleMethods = {
              ...styles,
              ...additionalStyleMethods,
            };

            if (Object.keys(allStyleMethods).includes(methodName)) {
              const ss = path.node.arguments.map(() => '%s').join('');
              path.node.arguments.unshift(
                types.stringLiteral(`%c${ss}%s`),
                types.stringLiteral(allStyleMethods[methodName]),
                types.stringLiteral(
                  `${file.opts.filename.slice(
                    process.cwd().length,
                  )} (${lineNum}:${columnNum}):`,
                ),
              );
              callee.node.property.name = 'log';
            }
          }
        }
      },
    },
  };
}
