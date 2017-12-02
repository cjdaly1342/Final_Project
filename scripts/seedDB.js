const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tasklist",
  {
    useMongoClient: true
  }
);

const TaskListSeed = [
  {
    title: "Cummins ISX Injector Performance Test",
    step: "1. Chock Wheels, 2. Connect INSITE, 3. Start Engine, 4. Open ECM Diagnostics and select Injector Performance Test, 5. The test will test 3 points for each injector, if one of them fails, that injector must be replaced"
  },
];

db.taskList
  .remove({})
  .then(() => db.TaskList.collection.insertMany(taskListSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
