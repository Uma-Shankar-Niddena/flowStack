const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  from: String,
  to: String,
  changedAt: {
    type: Date,
    default: Date.now
  }
});

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userData"
  },

  sdlcStage: {
    type: String,
    enum: [
      "Backlog",
      "Todo",
      "In Progress",
      "Testing",
      "Done"
    ],
    default: "Backlog"
  },

  history: [historySchema]
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
