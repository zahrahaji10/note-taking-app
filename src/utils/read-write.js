const fs = require("fs");
const path = require("path");

// fn to read from file
const readDataFromFile = () => {
  try {
    const filePath = path.join(__dirname, `../data/notes.json`);

    const rawData = fs.readFileSync(filePath, "utf8");

    return JSON.parse(rawData);
  } catch (error) {
    console.log(`[ERROR: Failed to read data from file | ${error.message}]`);
  }
};

const writeDataToFile = (data) => {
  try {
    // create path to write to notes file
    const filePath = path.join(__dirname, `../data/notes.json`);

    // write data to file
    fs.writeFileSync(filePath, JSON.stringify(data));

    // display an error message if unable to write file
  } catch (error) {
    console.log(`[ERROR: Failed to write data from file | ${error.message}]`);
  }
};

// export read and write functions
module.exports = {
  readDataFromFile,
  writeDataToFile,
};
