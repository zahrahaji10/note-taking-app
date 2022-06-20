const path = require("path");

const renderHomePage = (req, res) => {
  res.send("home");
};

const renderNotesPage = (req, res) => {
  // get file path
  const filePath = path.join(__dirname, "../../dist/notes.html");

  // send file
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderNotesPage,
};
