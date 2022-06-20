// import express using a router class
const { Router } = require("express");

// import controller functions from api file
const { getNotes, deleteNotes, createNotes } = require("../controllers/api");

// create a router instance
const router = Router();

//routers with middleware functions
router.get("/", getNotes);
router.delete("/:id", deleteNotes);
router.post("/", createNotes);

// export file
module.exports = router;
