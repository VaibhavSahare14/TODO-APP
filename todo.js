//Select DOM Elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(e) {

    e.preventDefault();

    if (todoInput.value === "") {
        return;
    } else {
        //Create todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //Create list
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todoInput.value = "";

        //Create Completed Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `<i class="fa fa-check"></i>`;
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //Create trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //append Todo to todo list
        todoList.appendChild(todoDiv);
    }
}

function deleteTodo(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("delete");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(function (todo) {
        if (e.target.value == "all") {
            todo.style.display = "flex";
        } else if (e.target.value == "completed") {
            if (todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
        } else {
            if (todo.classList.contains("completed")) {
                todo.style.display = "none";
            } else {
                todo.style.display = "flex";
            }
        }
    });
}