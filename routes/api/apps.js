const express = require("express");
const router = express.Router();

//@route		GET api/apps
//@desc			Test route
//@access		Public
router.get("/", (req, res) => res.send("Apps route"));

module.exports = router;
