import { readFileIntoArray } from "../../utils/generateArrayTestData";
import { replaceNumberWordsWithDigits } from "../../utils/replaceWordsWithDigits";

const isValidNumber = (str: string) => {
  const num = Number(str);
  return Number.isInteger(num) && num >= 1 && num <= 9;
};

export const trebuchet = async (): Promise<number> => {
  /*
    To get the answer for Part 1, you will need to to use testData instead of mappedData
  */
  const testData = await readFileIntoArray(
    "./test_data/trebuchet_test_data.txt"
  );
  // Part 2 solution
  // this will produce 57325, use testData instead to produce the correct answer for Part 1
  const mappedData = testData.map((line) => replaceNumberWordsWithDigits(line));

  if (testData.length === 0) {
    return 0;
  }
  let result: number[] = [];

  // Loop through each line of the test data
  for (const line of mappedData) {
    let currentWordDigits: string[] = [];

    // Loop through each character of the line
    for (const char of line) {
      // Check if the character is a digit
      if (isValidNumber(char)) {
        currentWordDigits.push(char);
      }
    }

    let combined = 0;
    // if there is a signle digit only, duplicate it
    if (currentWordDigits.length === 1) {
      combined = parseInt(currentWordDigits[0] + currentWordDigits[0]);
      // otherwise, combine the first and last digits only, skipping everythin
    } else if (currentWordDigits.length > 1) {
      combined = parseInt(
        currentWordDigits[0] + currentWordDigits[currentWordDigits.length - 1]
      );
    }

    // Reset the currentWordDigits array for the next word
    currentWordDigits = [];

    // Add the combined number to the result array
    result.push(combined);
  }

  // Return the sum of all the combined numbers
  return result.reduce((acc, val) => acc + val, 0);
};

const result = async () => {
  const result = await trebuchet();
  console.log("Trebuchet Part 1 result: ", result);
};
result();
