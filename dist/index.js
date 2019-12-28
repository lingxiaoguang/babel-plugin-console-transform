"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var styles_1 = require("./styles");
var utils_1 = require("./utils");
var schema_1 = require("./schema");
function default_1(_a) {
    var types = _a.types;
    return {
        name: 'console-transform',
        visitor: {
            CallExpression: function (path, state) {
                var _a = state.opts, opts = _a === void 0 ? {} : _a, file = state.file;
                utils_1.validateSchema(schema_1["default"], opts);
                var env = opts.env, removeMethods = opts.removeMethods, additionalStyleMethods = opts.additionalStyleMethods;
                var callee = path.get('callee');
                if (callee.node.type === 'MemberExpression' && callee.node.object.name === 'console') {
                    var methodName = callee.node.property.name;
                    if (env === 'production') {
                        if (removeMethods) {
                            var args = path.node.arguments.map(function (item) { return item.value; });
                            if (utils_1.isMatch(removeMethods, methodName, args)) {
                                return path.remove();
                            }
                            return;
                        }
                        return path.remove();
                    }
                    else {
                        var lineNum = path.node.loc.start.line;
                        var columnNum = path.node.loc.start.column;
                        var allStyleMethods = __assign(__assign({}, styles_1["default"]), additionalStyleMethods);
                        if (Object.keys(allStyleMethods).includes(methodName)) {
                            var ss = path.node.arguments.map(function () { return '%s'; }).join('');
                            path.node.arguments.unshift(types.stringLiteral("%c" + ss + "%s"), types.stringLiteral(allStyleMethods[methodName]), types.stringLiteral(file.opts.filename.slice(process.cwd().length) + " (" + lineNum + ":" + columnNum + "):"));
                            callee.node.property.name = 'log';
                        }
                    }
                }
            }
        }
    };
}
exports["default"] = default_1;
