const { readFile, readFileSync } = require("fs");

const txt = readFileSync("../data/data.csv", "utf-8");
console.log(txt);