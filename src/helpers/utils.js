"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
exports.Utils = {
    lines: function (input) {
        return input.split("\n");
    },
    stringDivideInto: function (input, divisor) {
        var loopCount = Math.floor(input.length / divisor);
        var container = [];
        for (var i = 0; i < loopCount; ++i) {
            container.push(input.slice(divisor * i, (divisor * (i + 1))));
        }
        return container;
    },
    arrayDivideInto: function (input, divisor) {
        var loopCount = Math.floor(input.length / divisor);
        var container = [];
        for (var i = 0; i < loopCount; ++i) {
            container.push(input.splice(0, divisor));
        }
        return container;
    },
    // Takes two sets and returns elements common to both (in an array)
    arrayGetCommonElements: function (set1, set2) {
        var commonElements = [];
        set1.forEach(function (item) {
            if (set2.has(item)) {
                commonElements.push(item);
            }
        });
        return commonElements;
    },
    matrixRotateClockwise: function (input) {
        input.reverse();
        var container = [];
        for (var i = 0; i < input[0].length; ++i) {
            container.push([]);
            for (var j = 0; j < input.length; ++j) {
                container[i].push(input[j][i]);
            }
        }
        return container;
    },
};
