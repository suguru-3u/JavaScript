import "../css/index.css";
let todos = ["todo"];

const readTodo = () => {
  const todoList = document.getElementById("todo-list");
  todos.forEach((todo, index) => {
    todoList.innerHTML += `<li>${todo}<button onclick="displayEditTodo(${index})">編集</button><button onclick="deleteTodo(${index})">削除</button></li>`;
  });
};
const clearTodoList = () => {
  document.getElementById("todo-list").innerHTML = "";
};

const addTodo = () => {
  todos = [...todos, document.getElementById("todo-value").value];
  document.getElementById("todo-value").value = "";
  clearTodoList();
  readTodo();
};

const editTodo = () => {
  const todoValue = document.getElementById("edit-value").value;
  const todoIndex = document.getElementById("edit-value").name;
  todos = todos.map((todo, index) => {
    if (index === parseInt(todoIndex)) {
      return todoValue;
    }
    return todo;
  });
  document.getElementById("edit-value").value = "";
  clearTodoList();
  readTodo();
  hiddenTodoFiled();
};

const deleteTodo = (todoIndex) => {
  todos = todos.filter((_, filterIndex) => filterIndex !== todoIndex);
  clearTodoList();
  readTodo();
};

const displayChange = (elementId, displayStyle) => {
  document.getElementById(elementId).style.display = displayStyle;
};

const hiddenTodoFiled = () => {
  displayChange("todo-filed-edit", "none");
  displayChange("todo-filed", "block");
};

const displayEditTodo = (index) => {
  displayChange("todo-filed-edit", "block");
  displayChange("todo-filed", "none");
  document.getElementById("edit-value").value = todos[index];
  document.getElementById("edit-value").name = index;
};

// 読み込み時の処理
window.onload = readTodo();
