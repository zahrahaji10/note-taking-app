const fs = require("fs");
const path = require("path");

// fn to read from file
const readDataFromFile = (fileName) => {
  const filePath = path.join(__dirname, `../data/${fileName}.json`);

  const rawData = fs.readFileSync(filePath, "utf8");

  return JSON.parse(rawData);
};

const writeDataToFile = (fileName, data) => {
  const filePath = path.join(__dirname, `../data/${fileName}.json`);

  // write data to file
  fs.writeFileSync(filePath, JSON.stringify(data));
};

// export read and write functions
module.exports = {
  readDataFromFile,
  writeDataToFile,
};
