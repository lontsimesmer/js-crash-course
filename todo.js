const todoForm = document.querySelector(".todo-container form");
const container = document.querySelector(".todos");

const todos = [
  {
    id: "1",
    name: "First todo",
    deadline: "12-12-2023 10:30",
    priority: "low",
    createdAt: "04-05-2023 11:20",
    done: false,
  },
  {
    id: "2",
    name: "Second todo",
    deadline: "12-12-2023 10:30",
    priority: "high",
    createdAt: "04-05-2023 11:20",
    done: true,
  },
  {
    id: "3",
    name: "Third todo",
    deadline: "12-12-2023 10:30",
    priority: "low",
    createdAt: "04-05-2023 11:20",
    done: false,
  },
  {
    id: "4",
    name: "Fouth todo",
    deadline: "12-12-2023 10:30",
    priority: "high",
    createdAt: "04-05-2023 11:20",
    done: true,
  },
];

function markTodoAsDone(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

function animateOutAndDeleteTodo() {
  setTimeout(() => {
    if (todos[index].done) {
      todos[index].deleted = true;
      renderTodos();
    }
  }, 3000);
}

function renderTodo(todo, index) {
  return `
  <div class="todo">
    <div class="todo-content">
      <div class="todo-flex">
        <div class="contain">
          <input type="checkbox" class="box" onchange="markTodoAsDone(${index})" ${
    todo.done ? "checked" : ""
  } />
          <div class="flex">
            <p ${todo.done ? "crossed" : ""}>${todo.name}</p>
            <span class="tag">${todo.priority}</span>
          </div>
        </div>
        <div class="flex">
          <p>${todo.deadline}</p>
          <p>${todo.createdAt}</p>
        </div>
      </div>
    </div>
  </div>
  `;
}

function renderTodos() {
  const html = todos.map(renderTodo).join("");
  container.innerHTML = html;
}
renderTodos();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    name: e.target.todo.value,
    deadline: e.target.deadline.value,
    priority: e.target.priority.value,
    createdAt: new Date().toUTCString().slice(0, 19),
    id: Date.now(),
  };
  todos.push(newTodo);
  renderTodos();
});
