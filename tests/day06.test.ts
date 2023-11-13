import { readFile } from "../src/helpers/io";
import { Day05, runInstruction, convertInstructions } from "../src/day05/main";

type result = {
  isSuccess: Boolean;
  value: String | null;
  error: String | null;
};

let inputResult: result = {
  isSuccess: false,
  value: null,
  error: null,
};

function getInput(): Promise<string> {
  return new Promise((resolve, reject) => {
    let readRead = readFile(__dirname + "/", "day05input.txt");
    readRead.then(
      (data: string) => {
        resolve(data);
      },
      (err: string) => {
        reject(err);
      },
    );
  });
}

beforeAll(async () => {
  try {
    let temp: string = await getInput();
    inputResult.isSuccess = true;
    inputResult.value = temp;
  } catch (err) {
    inputResult.isSuccess = false;
    let message;
    if (err instanceof Error) message = err.message;
    else message = String(err);
    inputResult.error = message;
  }
});

test("06-1", () => {
  // if (inputResult.isSuccess) {
  //   expect(Day05.partOne(inputResult.value)).toBe("ZRLJGSCTR");
  // } else {
  //   console.error(inputResult.error);
  // }
});
