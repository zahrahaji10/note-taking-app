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
const deleteNotes = (req, res) => {
  // get id from request params
  const { id } = req.params;

  // get notes from file
  const notesData = readDataFromFile();

  // filter array and remove note from array
  const filteredNotes = notesData.filter((note) => note.id !== id);

  // write back to data file
  writeDataToFile(filteredNotes);

  // return response
  return res.json(notesData);
};

// controller fn to create notes
const createNotes = (req, res) => {
  console.log(req.body);
  // add post body request
  const { title, text } = req.body;

  // create id for each new note
  const id = uuidv4();

  // create a payload for new notes
  const note = {
    id,
    title,
    text,
  };

  // get notes from file
  let notesData = readDataFromFile();

  // push to array
  notesData.push(note);

  // write back to file
  writeDataToFile(notesData);

  // return response
  return res.json(notesData);
};

// export functions
module.exports = {
  getNotes,
  deleteNotes,
  createNotes,
};
