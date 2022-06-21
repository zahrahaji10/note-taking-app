const { readDataFromFile, writeDataToFile } = require("../utils/read-write");

// controller fn to get notes
const getNotes = (req, res) => {
  // read from data file
  const displayNotes = readDataFromFile(notes);

  console.log(notes);

  // return data
  return res.json(displayNotes);
};

// controller fn to delete notes
const deleteNotes = () => {
  // get id from request
  // find note by id
  // return response
  return;
};

// controller fn to create notes
const createNotes = () => {
  // add post body request
  // push to array
  // return response
  return;
};

// export functions
module.exports = {
  getNotes,
  deleteNotes,
  createNotes,
};
