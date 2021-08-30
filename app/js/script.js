const addButton = document.querySelector(".todo__input button");
const todoInput = document.querySelector(".todo__input input");
const form = document.querySelector("form");
const listParent = document.querySelector(".todo__list")

form.addEventListener("submit", addTodo);


function addTodo(e) {
    e.preventDefault();
    const inputValue = todoInput.nodeValue;
    const toDo = document.createElement("div");
    toDo.classList.add("todo__item");

    const toDoCheck = document.createElement("input")
    toDoCheck.type = "checkbox";
    toDoCheck.classList.add("todo__button--check");
    toDoCheck.addEventListener("click", deleteCheck);
    toDo.appendChild(toDoCheck);

    const toDoText = document.createElement("li");
    toDoText.innerHTML = todoInput.value;
    toDo.appendChild(toDoText);

    listParent.appendChild(toDo);




    const toDoDelete = document.createElement("button");
    toDoDelete.classList.add("todo__button--delete");
    toDoDelete.addEventListener("click", deleteCheck);
    toDoDelete.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    toDo.appendChild(toDoDelete);

}


function deleteCheck() {
    console.log("delete");
}
