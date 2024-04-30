import { readFileSync } from "fs";

export const readFileIntoArray = async (
  filePath: string
): Promise<string[]> => {
  try {
    const fileContent = readFileSync(filePath, "utf8");
    // Split the content by newlines and filter out any empty lines
    return fileContent.split(/\r?\n/);
  } catch (err) {
    console.error("Error reading file:", err);
    return []; // Return an empty array in case of error
  }
};
