
const inputToDo = document.querySelector('.todo__input');
const buttonToDo = document.querySelector('.todo__button');
const todoList = document.querySelector('.todo__contant');
const containerToDo = document.querySelector('.todo');


if (localStorage.getItem('taskToDo')) {
    todoList.innerHTML = localStorage.getItem('taskToDo');
}

buttonToDo.addEventListener('click', createTodo);
containerToDo.addEventListener('click', deleteToDo);
containerToDo.addEventListener('click', doneToDo);
containerToDo.addEventListener('click', editToDo);

function createTodo(event) {

    let todo = document.createElement('div');
    todo.classList.add('todo__item');

    let div = document.createElement("div");
    div.innerText = `${inputToDo.value}`;
    div.classList.add('todo__text');
    todo.appendChild(div);

    let buttons = document.createElement('div');
    buttons.classList.add('todo__buttons');
    todo.appendChild(buttons);


    let buttonDone = document.createElement('button');
    buttonDone.innerHTML = '<i class="fa-solid fa-check"></i>';
    buttonDone.classList.add('todo__done');
    buttons.appendChild(buttonDone);

    let buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    buttonDelete.classList.add('todo__delete');
    buttons.appendChild(buttonDelete);

    let buttonEdit = document.createElement('button');
    buttonEdit.innerHTML = '<i class="fa-solid fa-edit"></i>';
    buttonEdit.dataset.action = 'edit';
    buttonEdit.classList.add('todo__edit');
    buttons.appendChild(buttonEdit);

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
    if (event.target.dataset.action === 'edit') {
        const li = event.target.closest('.todo__item');
        // console.log(li);
        const div = li.firstElementChild;
        console.log(div);
        const input = document.createElement('textarea');
        input.classList.add('todo__input-edit')
        input.style.position = 'absolute';
        input.style.left = '0px';
        input.style.top = '0px';

        const edit = li.lastElementChild;
        edit.style.position = 'absolute';
        edit.style.right = '0px';
        // edit.style.background = ' rgb(255, 204, 0)';
        edit.style.top = '0px';
        input.type = 'text';
        input.value = div.textContent;
        li.insertBefore(input, div);
        li.removeChild(div);
        input.focus();
        event.target.dataset.action = 'save';


    } else if (event.target.dataset.action === 'save') {
        const li = event.target.closest('.todo__item');
        const input = li.firstElementChild;
        const div = document.createElement('div');
        const edit = li.lastElementChild;
        div.classList.add('todo__text');
        div.textContent = input.value;
        li.insertBefore(div, input);
        li.removeChild(input);
        event.target.dataset.action = 'edit';
        edit.style.position = 'static';
    }
    saveLocalStorage();
}
