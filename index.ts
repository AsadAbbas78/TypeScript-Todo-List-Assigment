import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while (loop) {
  const answers: {
    TODO: string;
    Retry: boolean;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "Todo",
      message: "What do you to add in your todo ",
    },
    {
      type: "confirm",
      name: "Retry",
      message: "Do you want to add more todo",
      default: false,
    },
  ]);

  const { TODO, Retry } = answers;
  console.log(answers);

  loop = Retry;
  if (TODO) {
    todos.push(TODO);
  } else {
    console.log("kindly add valid input");
  }
}

if (todos.length > 0) {
  console.log("your TOdo List :n");

  todos.forEach((todo) => {
    console.log(todo);
  });
} else {
  console.log("No todos found");
}
