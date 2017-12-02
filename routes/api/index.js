const router = require("express").Router();
const taskListRoutes = require("./taskList");

// Task List routes
router.use("/taskList", taskListRoutes);

module.exports = router;
