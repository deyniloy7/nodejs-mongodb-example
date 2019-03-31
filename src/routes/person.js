const express = require("express");
const router = express.Router();

router.get("/person", (req, res) => {
  res.send(`You requested a person ${req.query.name}`);
});

router.get("/person/:name", (req, res) => {
  res.send(`You requested a person named ${req.params.name}`);
});

router.get("/error", (req, res) => {
  throw new Error("This is a forced error");
});

module.exports = router;
