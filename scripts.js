const initialTasks = [
  {
    id: 1,
    title: "gym",
    description: "work those muscles",
    status: "todo",
  },
  {
    id: 2,
    title: "Study",
    description: "Work those brain muscles",
    status: "doing",
  },
  {
    id: 3,
    title: "Sleep",
    description: "Rest that body",
    status: "done",
  },
];

//addTask() function
//----------------------------
function addTask() {
  //1. ask user for task details (title, description, status)
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  //2 & 3 validate status input using a while loop
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  //4. create a new task object
  const newTask = {
    id: initialTasks.length + 1,
    title: title,
    description: description,
    status: status,
  };

  //5. Add task to the array
  initialTasks.push(newTask);
}

//getCompletedTasks() function
// -------------------------------------
function getCompletedTasks() {
  return initialTasks.filter((task) => task.status === "done");
}

///keep adding tasks until we have 6 tasks in total
// -------------------------------------
while (initialTasks.length < 6) {
  addTask();
}

// alert user when task board is full (6 tasks)
// -------------------------------------
if (initialTasks.length === 6) {
  alert(" Your task board is full! (6 tasks)");
}

// Display all tasks and completed tasks in the console
// -------------------------------------
console.log("All tasks:", initialTasks);
console.log("Completed tasks:", getCompletedTasks());
