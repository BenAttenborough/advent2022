const util2 = require("../helpers/io");

let resultTwo = util2.readFile(__dirname, "testinput.txt");
resultTwo.then(
  (data) => {
    let answer = dayTwoPartOne(data);
    console.log(answer);
  },
  (err) => {
    console.log(err);
  }
);

type Attack = "ROCK" | "PAPER" | "SCISSORS";
type Result = "LOOSE" | "DRAW" | "WIN";

function dayTwoPartOne(input: string): number {
  return input
    .split("\n")
    .map(line => {
      let newLine = `${line[0]}${line[2]}`;
      let responseScore = 0;
      switch (newLine[1]) {
        case 'X':
          responseScore = 1;
          break;
        case 'Y':
          responseScore = 2;
          break;;
        case 'Z':
          responseScore = 3;
          break;
      }
      let resultScore = 0;
      if (
        newLine === 'AX'
        || newLine === 'BY'
        || newLine === 'CZ'
      ) {
        resultScore = 3
      } else {
        if (
          newLine === 'AY'
          || newLine === 'BZ'
          || newLine === 'CX'
        ) {
          resultScore = 6
        }
      }
      return responseScore + resultScore;
    })
    .reduce((prev, next) => prev + next, 0);
};

function convertAttack(attackChar: string): Attack {
  switch (attackChar) {
    case 'A':
      return "ROCK";
    case 'B':
      return "PAPER";
    default:
      return "SCISSORS";
  }
}

function convertResult(attackChar: string): Result {
  switch (attackChar) {
    case 'A':
      return "LOOSE";
    case 'B':
      return "DRAW";
    default:
      return "WIN";
  }
}

function actionForDesiredResult(attack: Attack, desiredResult: Result): Attack {
  switch (attack) {
    case "PAPER":
      return "SCISSORS";

    case "ROCK":
      return "PAPER";

    case "SCISSORS":
      return "ROCK";
  }
}

// function dayTwoPartTwo(input: string): number {
//   return input
//     .split("\n")
//     .map(line => {
//       let [attack, desiredResult] = [convertAttack(line[0]), convertResult(line[2])];

//     )

// };