const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers
} = require("../controllers/userControler");

router.post("/create", createUser);
router.get("/", getUsers);

module.exports = router;
