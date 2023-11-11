"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day01 = void 0;
var utils_js_1 = require("../helpers/utils.js");
exports.Day01 = {
    partOne: function (input) {
        return input
            .split("\n\n")
            .map(utils_js_1.Utils.lines)
            .map(function (val) { return val.map(function (x) { return parseInt(x); }); })
            .map(function (val) { return val.reduce(function (prev, next) {
            return prev + next;
        }, 0); })
            .reduce(function (prev, next) {
            return (next > prev) ? next : prev;
        }, 0);
    },
    partTwo: function (input) {
        return input
            .split("\n\n")
            .map(function (x) { return x.split("\n"); })
            .map(function (val) { return val.map(function (x) { return parseInt(x); }); })
            .map(function (val) { return val.reduce(function (prev, next) {
            return prev + next;
        }, 0); })
            .sort(function (a, b) { return b - a; })
            .splice(0, 3)
            .reduce(function (prev, next) {
            return prev + next;
        }, 0);
    }
};
