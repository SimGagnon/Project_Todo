const addButton = document.querySelector(".todo__form button");
const todoInput = document.querySelector(".todo__form input");
const form = document.querySelector("form");
const listParent = document.querySelector(".todo__list")
const todoFilter = document.querySelectorAll(".todo__nav li")

form.addEventListener("submit", addTodo);
todoFilter.forEach(li => {
    li.addEventListener('click', filterTodo);
})

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

    const toDoDelete = document.createElement("button");
    toDoDelete.classList.add("todo__button--delete");
    toDoDelete.addEventListener("click", deleteCheck);
    toDoDelete.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    toDo.appendChild(toDoDelete);

    todoInput.value = "";
    listParent.appendChild(toDo);
}


function deleteCheck(e) {
    const item = e.target
    //Delete todo 
 /*    item.classList[0] === 'todo__button--delete' ? item.parentNode.remove() : null ; */
    if(item.classList[0] === 'todo__button--delete') {
        item.parentNode.classList.add("slideout");
        item.parentNode.addEventListener('transitionend', function() {
            item.parentNode.remove()
        })
    }
    // Check todo
    item.classList[0] === 'todo__button--check' ? item.parentNode.classList.toggle('completed') : null;
}

function filterTodo(e) {

    const todos = listParent.childNodes;
    console.log(todos);
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                } 
                break;
            case "active":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                } 
                break;
        }
    })
}