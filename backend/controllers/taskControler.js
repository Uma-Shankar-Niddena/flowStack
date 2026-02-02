const Task = require("../models/tasks");

// create task (admin)
exports.createTask = async (req, res) => {
  const { title, description, assignedTo } = req.body;

  const task = await Task.create({
    title,
    description,
    assignedTo
  });

  res.status(201).json(task);
};

// get tasks (admin/user)
exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate("assignedTo", "name role");
  res.json(tasks);
};

// update SDLC stage
exports.updateTaskStage = async (req, res) => {
  const { stage } = req.body;

  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.history.push({
    from: task.sdlcStage,
    to: stage
  });

  task.sdlcStage = stage;
  await task.save();

  res.json(task);
};
