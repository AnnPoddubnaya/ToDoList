const inputToDo = document.querySelector('.todo__input');
const buttonToDo = document.querySelector('.todo__button');
const outToDo = document.querySelector('.todo__out');
let toDoList = [];

if (localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'));
    addToDo();
}
buttonToDo.addEventListener('click', () => {
    let newToDo = {
        text: inputToDo.value,
        chekced: false,
    }
    toDoList.push(newToDo);
    // console.log(toDoList);
    addToDo();
    localStorage.setItem('todo', JSON.stringify(toDoList));
});

function addToDo() {
    let toDo = '';
    toDoList.forEach(item => {
        toDo += `
       <li class="todo__item">${item.text}</li>
       `
    })
    outToDo.innerHTML = toDo;

}