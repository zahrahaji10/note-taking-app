const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const { readDataFromFile, writeDataToFile } = require("../utils/read-write");

// controller fn to get notes
const getNotes = (req, res) => {
  // read from data file
  const notes = readDataFromFile();
  // return all notes data
  return res.json(notes);
};

// controller fn to delete notes
const deleteNotes = () => {
  // get id from request
  // find note by id
  // return response
  return;
};

// controller fn to create notes
const createNotes = (res, req) => {
  // add post body request
  const { title, text } = req.body;

  const note = {
    id,
    title,
    text,
  };

  // get notes from file

  // push to array

  // write back to file

  // return response
  return;
};

// export functions
module.exports = {
  getNotes,
  deleteNotes,
  createNotes,
};
