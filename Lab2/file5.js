import { stat } from "fs/promises";
const stats = await stat ("readme.md");
console.log("Is file:",stats.isFile());
console.log("Is :", stats.isFile());
console.log("Is file:", stats.isFile());
console.log("Is file:", stats.isFile());
