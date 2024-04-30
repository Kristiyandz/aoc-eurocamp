import { readFileIntoArray } from "../../utils/generateArrayTestData";

interface Cubes {
  [key: string]: number;
  ["red"]: number;
  ["green"]: number;
  ["blue"]: number;
}

export const getPowerOfMiniumSetOfCubes = (input: string): number => {
  if (input === "") {
    return 0;
  }
  // store the max count of each colour
  const maxCubeCount: Cubes = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const gameData = input.split(": ");

  // get a list of the rounds
  const rounds = gameData[1].split("; ");

  // loop through each round

  for (const round of rounds) {
    // get a list of the cubes in the round
    const cubes = round.split(", ");

    // loop through each cube/count pair
    for (const cube of cubes) {
      // split the cube into count and colour
      const [count, colour] = cube.split(" ");
      // check if the cube count for the current round is greater than the available cubes

      if (maxCubeCount[colour] <= parseInt(count)) {
        maxCubeCount[colour] = parseInt(count);
      }
    }
  }

  return maxCubeCount.red * maxCubeCount.green * maxCubeCount.blue;
};

export const getValidGameID = (input: string): number => {
  if (input === "") {
    return 0;
  }
  // a record of max available cubes and their colours
  const availableCubes: Cubes = {
    red: 12,
    green: 13,
    blue: 14,
  };
  const gameData = input.split(": ");
  // extract the gameId
  const [_, gameId] = gameData[0].split(" ");

  // get a list of the rounds
  const rounds = gameData[1].split("; ");

  // loop through each round
  for (const round of rounds) {
    // get a list of the cubes in the round
    const cubes = round.split(", ");

    // loop through each cube/count pair
    for (const cube of cubes) {
      // split the cube into count and colour
      const [count, colour] = cube.split(" ");
      // check if the cube count for the current round is greater than the available cubes

      if (availableCubes[colour] < parseInt(count)) {
        return 0;
      }
    }
  }

  return parseInt(gameId);
};

export const getConondrumResults = async (): Promise<number> => {
  // read the data from the file
  const games = await readFileIntoArray("./cube_conondrum_test_data.txt");
  // store the ids of the valid games and the power of the minimum set of cubes
  let validGames: number[] = [];
  let powerOfMinimumSetOfCubes: number[] = [];

  // loop through each game
  for (const game of games) {
    validGames.push(getValidGameID(game));
    powerOfMinimumSetOfCubes.push(getPowerOfMiniumSetOfCubes(game));
  }

  const maxPower = powerOfMinimumSetOfCubes.reduce((acc, val) => acc + val, 0);
  console.log("PART 2 - Max power of minimum set of cubes: ", maxPower);

  return validGames.reduce((acc, val) => acc + val, 0);
};

const result = async () => {
  const result = await getConondrumResults();
  console.log("PART 1 - Sum of valid game ids: ", result);
};
result();
