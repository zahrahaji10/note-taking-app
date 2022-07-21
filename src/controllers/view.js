// import path
const path = require("path");

// controller fn to render home page
const renderHomePage = (req, res) => {
  // get file path
  const filePath = path.join(__dirname, "../../dist/index.html");

  // send file
  return res.sendFile(filePath);
};

// controller function to render notes page
const renderNotesPage = (req, res) => {
  // get file path
  const filePath = path.join(__dirname, "../../dist/notes.html");

  // send file
  return res.sendFile(filePath);
};

// export controller functions
module.exports = {
  renderHomePage,
  renderNotesPage,
};
