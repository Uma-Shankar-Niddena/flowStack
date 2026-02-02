const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  updateTaskStage
} = require("../controllers/taskControler");

router.post("/create-task", createTask);
router.get("/", getTasks);
router.put("/:id/stage", updateTaskStage);

module.exports = router;
