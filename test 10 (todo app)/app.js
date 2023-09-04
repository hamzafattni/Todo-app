const input = document.querySelector('.todo');
const ol = document.querySelector('ol');


let todo = [];
function addTodo(e) {
    e.preventDefault();
    ol.innerHTML = ''
    todo.push(input.value);
    console.log(todo);
    for (let i = 0; i < todo.length; i++) {
        ol.innerHTML = ol.innerHTML + `<li>${todo[i]}</li>
        <button onclick='deleteTodo(${i})'>Delete</button>
        <button onclick='editTodo(${i})'>Edit</button>`
    }
    input.value = '';
}

switch (input.value) {
    case ' ':
        alert('Enter todo')
        break;

    default:
        todo.push(input.value)
}


ol.innerHTML = ''

input.innerHTML = ''


function deleteTodo(index) {
    ol.innerHTML = '';
    todo.splice(index, 1);
    for (let i = 0; i < todo.length; i++) {
        ol.innerHTML = ol.innerHTML + `<li>${todo[i]}</li>
         <button onclick='deleteTodo(${i})'>Delete</button>
          <button onclick='editTodo(${i})'>Edit</button>`
    }
}
function editTodo(index) {
    ol.innerHTML = '';
    let userValue = prompt('Enter edited value');
    todo.splice(index, 1 , userValue);
    for (let i = 0; i < todo.length; i++) {
        ol.innerHTML = ol.innerHTML + `<li>${todo[i]}</li>
         <button onclick='deleteTodo(${i})'>Delete</button>
          <button onclick='editTodo(${i})'>Edit</button>`
    }
    console.log(todo)
}