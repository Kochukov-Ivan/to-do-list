const tasks = [
  //создаю переменную и массив в который будут помещатся задачи
  { task: "сделать счётчик задач" },
  { task: "сделать что бы класс active можно было убрать  " },
];
// console.log("Script working");
function addNewTask() {
  const taskInput = document.getElementById("task-input");
  // console.log("taskInput", taskInput.value);
  const ul = document.querySelector(".todo-list-ul"); //создаю переменную ul
  const li = document.createElement("li"); //создаю переменню li и создаем элемент li
  li.classList.add("list-group-item"); //добоваляем классу li
  li.onclick = () => {
    //при клике добавляем класс

    li.classList.add("active"); // добадляем li класс active
  };
  const button = document.createElement("button"); //добавить кнопку для удаления
  button.classList.add("btn", "btn-success"); // добавить кнопке два класс
  button.innerText = "DELETE"; // текст для кнопки
  button.onclick = () => {
    li.remove(); // удаление задачи
  };
  tasks.unshift({ task: taskInput.value }); // используем ЛОКАЛСТОРИДЖ чтобы сохранять наши задачи после прекращения работы
  li.append(button, taskInput.value); // добавляем в элемент li значение из инпута и кнопку
  ul.append(li); // добавляем в элемент ul наше li
}

const btn = document.querySelector(".btn-input"); // создаю переменную с кнопкой
btn.addEventListener("click", addNewTask); // по клику добавляю новую задачу

function getTodoList(alltasks) {
  const ul = document.querySelector(".todo-list-ul"); //создаю переменную ul
  const liElemets = alltasks.map((elem) => {
    const li = document.createElement("li"); // создаю переменную 'li' которая приравнивается созданный элемент 'li'
    li.classList.add("list-group-item");
    li.onclick = () => {
      //добавляем класс для красоты
      li.classList.add("active");
    };
    const button = document.createElement("button");
    button.classList.add("btn", "btn-success"); // добавить кнопке два класс
    button.innerText = "DELETE"; // текст для кнопки
    button.onclick = () => {
      li.remove();
    };
    li.append(button, elem.task);
    // console.log("li", li);
    return li;
  });
  //   console.log("liElemets", liElemets);
  return ul.append(...liElemets);
}
getTodoList(tasks);
