const router = require("express").Router();
const taskListController = require("../../controllers/taskListController");

// Matches with "/api/taskList"
router.route("/")
  .get(taskListController.findAll)
  .post(taskListController.create);

// Matches with "/api/taskList/:id"
router
  .route("/:id")
  .get(taskListController.findById)
  .put(taskListController.update)
  .delete(taskListController.remove);

module.exports = router;
