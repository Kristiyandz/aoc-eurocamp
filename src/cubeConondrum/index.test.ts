import { getValidGameID, getPowerOfMiniumSetOfCubes } from "./index";
import * as readFileIntoArray from "../../utils/generateArrayTestData";
import exp from "constants";

describe("Part 1 = Sum of Valid Game IDs", () => {
  it("should return 0 if empty string is passed", () => {
    const result = getValidGameID("");
    expect(result).toBe(0);
  });
  it("should return a valid game ID if it meets the rules", () => {
    const result = getValidGameID(
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
    );
    expect(result).toBe(1);
  });
  it("should return 0 if the game does not meet the rules", () => {
    const result = getValidGameID(
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"
    );
    expect(result).toBe(0);
  });

  it("should return a list of valid game ids from input", () => {
    const input = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];

    let sumOfGameIds: number[] = [];

    input.forEach((game) => {
      sumOfGameIds.push(getValidGameID(game));
    });

    const sum = sumOfGameIds.reduce((acc, val) => acc + val, 0);

    expect(sum).toBe(8);
  });
});

describe("Part 2 - Max power of minimum set of cubes", () => {
  it("should return 0 if empty string is passed", () => {
    const result = getPowerOfMiniumSetOfCubes("");
    expect(result).toBe(0);
  });
  it("should return the largest cube count per colour", () => {
    const result = getPowerOfMiniumSetOfCubes(
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
    );
    expect(result).toBe(48);
  });
  it("should return the sum of largest powers from each game", () => {
    const input = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];
    let sumOfGameIds: number[] = [];

    input.forEach((game) => {
      sumOfGameIds.push(getPowerOfMiniumSetOfCubes(game));
    });

    const sum = sumOfGameIds.reduce((acc, val) => acc + val, 0);

    expect(sum).toBe(2286);
  });
});
