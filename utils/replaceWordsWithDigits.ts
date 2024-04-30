export const replaceNumberWordsWithDigits = (input: string) => {
  // Mapping of number words to digits
  const numberMap: { [key: string]: string } = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  // Create a regex from the keys of the numberMap
  const regex = new RegExp(Object.keys(numberMap).join("|"), "gi");

  // Replace occurrences of the number words with their corresponding digits
  return input.replace(regex, (match) => numberMap[match.toLowerCase()]);
};
