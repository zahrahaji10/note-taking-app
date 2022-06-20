const { Router } = require("express");

const view = require("./view");

const router = Router();

// router.use("/api", api);
router.use("/", view);

module.exports = router;
