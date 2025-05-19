// Create an array of todo items
const todos = [
  { title: "Do homework", done: false },
  { title: "Clean the room", done: true },
  { title: "Read a book", done: false },
  { title: "Pay bills", done: true },
  { title: "Go for a walk", done: false },
];

// Filter todos into two separate arrays
const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

// Display the tasks
console.log("Done:");
completedTasks.forEach(task => console.log("- " + task.title));

console.log("\nOngoing:");
ongoingTasks.forEach(task => console.log("- " + task.title));
