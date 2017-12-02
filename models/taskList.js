const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskListSchema = new Schema({
  title: { type: String, required: true },
  step: String
});

const taskList = mongoose.model("TaskList", taskListSchema);

module.exports = taskList;
