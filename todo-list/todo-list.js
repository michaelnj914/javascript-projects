const todoList = [
  {
    name: "watch tv",
    dueDate: "2026-06-23",
  },
  {
    name: "play game",
    dueDate: "2026-06-23",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    //DESTRUCTURING
    const { name, dueDate } = todoObject;
    const html = `
                
                    <div>${name}</div>
                    <div>${dueDate}</div> 
                    <button onclick="
                        todoList.splice(${i}, 1);
                        renderTodoList();
                    " class="delete-button">Delete</button>
                    `;

    todoListHtml += html;
  }
  // console.log(todoListHtml);

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInput = document.querySelector(".js-due-date");
  const dueDate = dateInput.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate,
  });
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}
