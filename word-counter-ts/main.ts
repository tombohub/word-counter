import * as fs from "fs";

const fileName = "text.txt";

export function countWords(text: string): number {
  return text.split(" ").length;
}

try {
  const fileContent = fs.readFileSync(fileName, "utf-8");
  const wordCount = countWords(fileContent);
  console.log(`there is ${wordCount} words in text file`);
} catch (err: unknown) {
  if (err instanceof Error) console.error(err.message);
}
