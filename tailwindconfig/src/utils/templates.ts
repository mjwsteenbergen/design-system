import { promises } from "node:fs";
import Handlebars from "handlebars";

export const fromTemplate = async (filename: string) => {
  return Handlebars.compile(
    await promises.readFile(
      import.meta.dirname + "/../templates/" + filename,
      "utf8"
    )
  );
};
