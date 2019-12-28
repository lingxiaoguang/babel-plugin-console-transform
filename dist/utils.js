"use strict";
exports.__esModule = true;
var minimatch_1 = require("minimatch");
var validateOptions = require("schema-utils");
var isMatch = function (removeMethods, methodName, args) {
    var isRemove = false;
    for (var i = 0; i < removeMethods.length; i++) {
        if (typeof removeMethods[i] === 'function') {
            isRemove = removeMethods[i](args);
        }
        else if (minimatch_1.match([methodName], removeMethods[i]).length > 0) {
            isRemove = true;
        }
    }
    return isRemove;
};
exports.isMatch = isMatch;
var validateSchema = function (schema, options) {
    validateOptions(schema, options, {
        name: 'babel-plugin-console-transform'
    });
};
exports.validateSchema = validateSchema;
