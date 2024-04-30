import { trebuchet } from "./index";
import * as readFileIntoArray from "../../utils/generateArrayTestData";

describe("trebuchet", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return 0 if there is no test data", async () => {
    jest.spyOn(readFileIntoArray, "readFileIntoArray").mockResolvedValue([]);
    const result = await trebuchet();
    expect(result).toBe(0);
  });
  it("should return 0 if there are no digits or words representing digits", async () => {
    jest
      .spyOn(readFileIntoArray, "readFileIntoArray")
      .mockResolvedValue(["abc", "bca", "cab"]);
    const result = await trebuchet();
    expect(result).toBe(0);
  });
  it("should return 16 if when passing the word abconeblobsixfoo", async () => {
    jest
      .spyOn(readFileIntoArray, "readFileIntoArray")
      .mockResolvedValue(["abconeblobsixfoo"]);
    const result = await trebuchet();
    expect(result).toBe(16);
  });
  it("should return the 76 after getting the sum of the digits from multiple strings", async () => {
    jest
      .spyOn(readFileIntoArray, "readFileIntoArray")
      .mockResolvedValue(["1a2b3c4d5e", "6f7g8h9i10j"]);
    const result = await trebuchet();
    expect(result).toBe(76);
  });
  it("should return the 97 when passing a mixed string of numbers and worder numbers", async () => {
    jest
      .spyOn(readFileIntoArray, "readFileIntoArray")
      .mockResolvedValue(["3kkmbvvvtwoksspmqksevenoneplone", "6brzzmkxsm"]);
    const result = await trebuchet();
    expect(result).toBe(97);
  });
});
