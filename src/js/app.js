import { elTodoForm, elTodoTemplate, elTodosParent } from "./html-selection.js";

elTodoForm.onsubmit = function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const todoName = data.get("todoName");
  const todoBody = data.get("todoBody");
  const element = elTodoTemplate.content.cloneNode(true);
  element.getElementById("todoTitle").textContent = todoName;
  const todoBodyEL = element.getElementById("todoBody");
  todoBodyEL.textContent = todoBody;
  element.getElementById("todoCheckbox").onchange = (e) => {
    if (e.target.checked) {
      todoBodyEL.classList.add("line-through", "opacity-70");
    } else {
      todoBodyEL.classList.remove("line-through", "opacity-70");
    }
  };
  element.getElementById("deleteTodo").onclick = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  elTodosParent.appendChild(element);
  e.target.reset();
};
