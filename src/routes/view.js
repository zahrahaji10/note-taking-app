const { Router } = require("express");

const { renderHomePage, renderNotesPage } = require("../controllers/view");

const router = Router();

router.get("/notes", renderNotesPage);
router.get("/*", renderHomePage);

module.exports = router;
