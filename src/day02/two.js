export const Day02 = {
    partOne: (input) => {
        return input
            .split("\n")
            .map(line => {
            let [attack, defence] = [convertAttack(line[0]), convertDefence(line[2])];
            return scoreForDefence(defence) + resultScore(attack, defence);
        })
            .reduce((prev, next) => prev + next, 0);
    },
    partTwo: (input) => {
        return input
            .split("\n")
            .map(line => {
            let [attack, desiredResult] = [convertAttack(line[0]), convertResult(line[2])];
            let defence = defenceRequiredForDesiredResult(attack, desiredResult);
            return scoreForDefence(defence) + resultScore(attack, defence);
        })
            .reduce((prev, next) => prev + next, 0);
    }
};
// class Day02 {
//   partOne(input: string): number {
//     return input
//       .split("\n")
//       .map(line => {
//         let [attack, defence] = [convertAttack(line[0]), convertDefence(line[2])];
//         return scoreForDefence(defence) + resultScore(attack, defence);
//       })
//       .reduce((prev, next) => prev + next, 0);
//   };
//   partTwo(input: string): number {
//     return input
//       .split("\n")
//       .map(line => {
//         let [attack, desiredResult] = [convertAttack(line[0]), convertResult(line[2])];
//         let defence = defenceRequiredForDesiredResult(attack, desiredResult);
//         return scoreForDefence(defence) + resultScore(attack, defence);
//       })
//       .reduce((prev, next) => prev + next, 0);
//   };
// }
function scoreForDefence(defence) {
    switch (defence) {
        case 'ROCK':
            return 1;
        case 'PAPER':
            return 2;
        case 'SCISSORS':
            return 3;
    }
}
function resultScore(attack, defence) {
    switch (attack) {
        case 'ROCK':
            switch (defence) {
                case 'ROCK':
                    return 3;
                case 'PAPER':
                    return 6;
                case 'SCISSORS':
                    return 0;
            }
        case 'PAPER':
            switch (defence) {
                case 'ROCK':
                    return 0;
                case 'PAPER':
                    return 3;
                case 'SCISSORS':
                    return 6;
            }
        case 'SCISSORS':
            switch (defence) {
                case 'ROCK':
                    return 6;
                case 'PAPER':
                    return 0;
                case 'SCISSORS':
                    return 3;
            }
    }
}
function convertAttack(attackChar) {
    switch (attackChar) {
        case 'A':
            return "ROCK";
        case 'B':
            return "PAPER";
        default:
            return "SCISSORS";
    }
}
function convertDefence(attackChar) {
    switch (attackChar) {
        case 'X':
            return "ROCK";
        case 'Y':
            return "PAPER";
        default:
            return "SCISSORS";
    }
}
function convertResult(attackChar) {
    switch (attackChar) {
        case 'X':
            return "LOOSE";
        case 'Y':
            return "DRAW";
        default:
            return "WIN";
    }
}
function defenceRequiredForDesiredResult(attack, desiredResult) {
    switch (attack) {
        case "PAPER":
            switch (desiredResult) {
                case "DRAW":
                    return "PAPER";
                case "LOOSE":
                    return "ROCK";
                case "WIN":
                    return "SCISSORS";
            }
        case "ROCK":
            switch (desiredResult) {
                case "DRAW":
                    return "ROCK";
                case "LOOSE":
                    return "SCISSORS";
                case "WIN":
                    return "PAPER";
            }
        case "SCISSORS":
            switch (desiredResult) {
                case "DRAW":
                    return "SCISSORS";
                case "LOOSE":
                    return "PAPER";
                case "WIN":
                    return "ROCK";
            }
    }
}
//# sourceMappingURL=two.js.map