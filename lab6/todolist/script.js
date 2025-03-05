const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText.length === 0) {
    alert("กรุณากรอกข้อความก่อนเพิ่ม Task!");
    return;
  }

  if (todoText.length > 50) {
    alert("ข้อความต้องไม่เกิน 50 ตัวอักษร!");
    return;
  }

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(todo);
  todoInput.value = "";
  renderTodos();
}

function deleteTodo(id) {
  const confirmDelete = confirm("คุณแน่ใจหรือไม่ว่าต้องการลบ Task นี้?");
  if (!confirmDelete) return;

  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const checkBox = document.createElement("input");

    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", () => toggleCompleted(todo.id));

    todoText.textContent = todo.text;
    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "#888";
    }

    todoDeleteButton.textContent = "Delete";
    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.appendChild(checkBox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);
    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodos();
