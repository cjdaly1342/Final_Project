import axios from "axios";

export default {
  // Gets all taskList
  getTaskLists: function() {
    return axios.get("/api/taskList");
  },
  // Gets the TaskList with the given title
  getTaskList: function(title) {
    return axios.get("/api/taskList/" + title);
  },
  // Deletes the TaskList with the given title
  deleteTaskList: function(title) {
    return axios.delete("/api/taskList/" + title);
  },
  // Saves a TaskList to the database
  saveTaskList: function(taskListData) {
    return axios.post("/api/taskList", taskListData);
  }
};
