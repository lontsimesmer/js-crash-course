const todoForm = document.querySelector(".todo-container form");
const container = document.querySelector(".todos");
// const todoInput = document.getElementById("todo");
const dateInput = document.getElementById("date");

const todos = [
  {
    id: "1",
    name: "First todo",
    priority: "low",
    deadline: "11-07-2023 10:00",
    createdAt: "04-06-2023 10:00",
    done: false,
  },
  {
    id: "2",
    name: "Second todo",
    priority: "high",
    deadline: "12-08-2023 10:30",
    createdAt: "04-05-2023 11:30",
    done: false,
  },
  {
    id: "3",
    name: "Third todo",
    priority: "low",
    deadline: "10-09-2023 10:00",
    createdAt: "08-09-2023 12:00",
    done: false,
  },
  {
    id: "4",
    name: "Fouth todo",
    priority: "high",
    deadline: "12-10-2023 11:30",
    createdAt: "04-10-2023 12:30",
    done: false,
  },
];

// todoInput.addEventListener("todo", () => {
//   todoInput.setCustomValidity("");
//   todoInput.checkValidity();
//   console.log(todoInput.checkValidity());
// });

// todoInput.addEventListener("invalid", () => {
//   todoInput.setCustomValidity("Please enter your Todo.");
// });

dateInput.addEventListener("date", () => {
  dateInput.setCustomValidity("");
  dateInput.checkValidity();
  console.log(dateInput.checkValidity());
});

dateInput.addEventListener("invalid", () => {
  dateInput.setCustomValidity("Please enter the deadline.");
});

// function requiredInput(e) {
//   e.preventDefault();
//   const todoField = document.getElementById("todo");
//   let valid = true;
//   if (!todoField.value) {
//     const todoError = document.getElementById("todoError");
//     todoError.classList.add("visible");
//     todoField.classList.add("invalid");
//     todoError.setAttribute("aria-hidden", false);
//     todoError.setAttribute("aria-invalid", true);
//   }
//   return valid;
// }

function markTodoAsDone(index) {
  todos[index].deleted = false;
  todos[index].done = !todos[index].done;
  renderTodos();
  animateTodoOutAndDelete(index);
}

function animateTodoOutAndDelete(index) {
  setTimeout(() => {
    if (todos[index].done) {
      todos[index].deleted = true;
      renderTodos();
      setTimeout(() => {
        todos.splice(index, 1);
        renderTodos();
      }, 400);
    }
  }, 3000);
}

function convertTimeDigits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      convertTimeDigits(date.getUTCMonth() + 1),
      convertTimeDigits(date.getUTCDate()),
    ].join("-") +
    " " +
    [
      convertTimeDigits(date.getUTCHours()),
      convertTimeDigits(date.getUTCMinutes()),
    ].join(":")
  );
}

function renderTodo(todo, index) {
  return `<div class="todo flex ${todo.deleted ? "deleted" : ""}">
    <input type="checkbox" class="box" onchange="markTodoAsDone(${index})" ${
    todo.done ? "checked" : ""
  } />
    <div class="details">
      <div class="flex">
        <p class="flex ${todo.done ? "crossed" : ""}">${todo.name}</p>
        <p class="time">${todo.createdAt}</p>
      </div>
      <div class="flex">
        <p class="priority">${todo.priority}</p>
        <p class="time">before: ${todo.deadline}</p>
      </div>
    </div>
  </div>`;
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
    deadline: e.target.date.value,
    priority: e.target.priority.value,
    createdAt: formatDate(new Date()),
    id: Date.now(),
  };
  todos.push(newTodo);
  renderTodos();
});
