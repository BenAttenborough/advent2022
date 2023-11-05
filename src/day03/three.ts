import { Utils } from "../../helpers/utils.js"

export const Day03 = {
    partOne: (input: string): number => {
        return input
            .split("\n")
            .map(item => priorityOfCommonElementInString(item))
            .reduce((prev, next) => prev + next, 0);
    },

    partTwo: (input: string): number => {
        let lines = Utils.lines(input);
        let container = Utils.arrayDivideInto(lines, 3);
        return container
            .map(item => getCommonElements(new Set(item[0]), new Set(item[1]), new Set(item[2])))
            .map(item => convertCharCodeToPriority(item.charCodeAt(0))) // Inefficient to map twice
            .reduce((prev, next) => prev + next, 0);
    }
}

function priorityOfCommonElementInString(input: string): number {
    let bag01 = stringToSetString(input.substring(0, input.length / 2))
    let bag02 = stringToSetString(input.substring(input.length / 2))
    let commonElement = findCommonElement(bag01, bag02);
    return convertCharCodeToPriority(commonElement.charCodeAt(0));
}

function convertCharCodeToPriority(code: number): number {
    if (code <= 90) {
        return code - 38;
    } else {
        return code - 96;
    }
}

function stringToSetString(input: string): Set<string> {
    return new Set(Array.from(input));
}

function findCommonElement(set1: Set<string>, set2: Set<string>): string {
    let commonElement = "";
    set1.forEach(item => {
        if (set2.has(item)) {
            commonElement = item;
        }
    });
    return commonElement;
}

function getCommonElements(set1: Set<string>, set2: Set<string>, set3: Set<string>): string {
    let commonElements = new Set<string>();
    set1.forEach(item => {
        if (set2.has(item)) {
            commonElements.add(item);
        }
    });
    return findCommonElement(commonElements, set3);
}