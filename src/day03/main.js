"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day03 = void 0;
var utils_js_1 = require("../helpers/utils.js");
exports.Day03 = {
    partOne: function (input) {
        return input
            .split("\n")
            .map(function (item) { return priorityOfCommonElementInString(item); })
            .reduce(function (prev, next) { return prev + next; }, 0);
    },
    partTwo: function (input) {
        var lines = utils_js_1.Utils.lines(input);
        var container = utils_js_1.Utils.arrayDivideInto(lines, 3);
        return container
            .map(function (item) { return getCommonElements(new Set(item[0]), new Set(item[1]), new Set(item[2])); })
            .map(function (item) { return convertCharCodeToPriority(item.charCodeAt(0)); }) // Inefficient to map twice
            .reduce(function (prev, next) { return prev + next; }, 0);
    }
};
function priorityOfCommonElementInString(input) {
    var bag01 = stringToSetString(input.substring(0, input.length / 2));
    var bag02 = stringToSetString(input.substring(input.length / 2));
    var commonElement = findCommonElement(bag01, bag02);
    return convertCharCodeToPriority(commonElement.charCodeAt(0));
}
function convertCharCodeToPriority(code) {
    if (code <= 90) {
        return code - 38;
    }
    else {
        return code - 96;
    }
}
function stringToSetString(input) {
    return new Set(Array.from(input));
}
function findCommonElement(set1, set2) {
    var commonElement = "";
    set1.forEach(function (item) {
        if (set2.has(item)) {
            commonElement = item;
        }
    });
    return commonElement;
}
function getCommonElements(set1, set2, set3) {
    var commonElements = new Set();
    set1.forEach(function (item) {
        if (set2.has(item)) {
            commonElements.add(item);
        }
    });
    return findCommonElement(commonElements, set3);
}
