const express = require("express");
const router = express.Router();

//@route		GET api/servers
//@desc			Test route
//@access		Public
router.get("/", (req, res) => res.send("Servers route"));

module.exports = router;
