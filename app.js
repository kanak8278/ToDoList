const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

todoButton.addEventListener('click', addToDo);
todolist.addEventListener('click', deleteCheck);



function deleteCheck(e){
    
    const item = e.target;
    // console.log(item);
    if(item.classList[0] === 'delbtn'){
        const element = item.parentElement;
        element.remove();
    }

    if(item.classList[0] === 'compbtn' ){
        const element = item.parentElement;
        element.classList.toggle("completed");
    }
}




function addToDo(event){
    event.preventDefault();
    
    //To Do Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //To Do Content
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);

    //To Do Buttons
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delbtn');
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement('button');
    completeButton.classList.add('compbtn');
    completeButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    todoDiv.appendChild(completeButton);


    todolist.appendChild(todoDiv);
    todoInput.value='';
}


