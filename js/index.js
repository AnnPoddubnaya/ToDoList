
const inputToDo = document.querySelector('.todo__input');
const buttonToDo = document.querySelector('.todo__button');
const todoList = document.querySelector('.todo__container');
const containerToDo = document.querySelector('.todo');


if (localStorage.getItem('taskToDo')) {
    todoList.innerHTML = localStorage.getItem('taskToDo');
}

buttonToDo.addEventListener('click', createTodo);
containerToDo.addEventListener('click', deleteToDo);
containerToDo.addEventListener('click', doneToDo);

function createTodo(event) {
    event.preventDefault();
    let todo = document.createElement('div');
    todo.classList.add('todo__item');

    let li = document.createElement("div");
    li.innerText = `${inputToDo.value}`;
    li.classList.add('todo__text');
    todo.appendChild(li);

    let buttonDone = document.createElement('button');
    buttonDone.innerHTML = '<i class="fa-solid fa-check"></i>';
    buttonDone.classList.add('todo__done');
    todo.appendChild(buttonDone);

    let buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    buttonDelete.classList.add('todo__delete');
    todo.appendChild(buttonDelete);

    if (inputToDo.value = '') {
        alert('Please enter some text')
    } else {
        todoList.appendChild(todo);
    }

    inputToDo.value = '';
    inputToDo.focus();
    saveLocalStorage();
}
function deleteToDo(event) {
    if (event.target.classList.contains('todo__delete')) {
        const targetEl = event.target.closest('.todo__item')
        targetEl.remove();
    }
    saveLocalStorage();
}
function doneToDo(event) {
    if (event.target.classList.contains('todo__done')) {
        const targetEl = event.target.closest('.todo__item')
        targetEl.classList.toggle('done');
    }
    saveLocalStorage();
}
function saveLocalStorage() {
    localStorage.setItem('taskToDo', todoList.innerHTML);
}
function editToDo(event) {
    if (event.target.classList.contains('todo__text')) {
        console.log('it is work')
    }
    // console.log(event)
}
editToDo()