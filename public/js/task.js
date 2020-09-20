

//Selectors
const inputBtn = document.querySelector(".add_btn");
const todoLists = document.querySelector(".lists");
const inputDes = document.querySelector(".add_description");
const deleteBtn = document.querySelector(".item_delete");
const backBtn = document.querySelector(".p");
//eventListners
backBtn.addEventListener("click",back);
inputBtn.addEventListener("click",addTodo);
todoLists.addEventListener("click",checkTodo);
todoLists.addEventListener("dblclick",deleteTodo);

document.addEventListener("keypress",function(event) {
    if(event.keyCode === 13 || event.which === 13){
    addTodo();
    }
});



//function
function back() {
    location.replace("http://localhost:3000/task");
}

 function addTodo(event) {
    
    //item div

    if(inputDes.value !== ""){
        const todoItems = document.createElement("div");
    todoItems.classList.add("items");
    //description div
    const newTodo = document.createElement("div");
    newTodo.innerText = inputDes.value;
    newTodo.classList.add("item_description");
    todoItems.appendChild(newTodo);
    // delete item
    const deleteTodo = document.createElement("button");
    deleteTodo.innerText = "-";
    deleteTodo.classList.add("item_delete");
    todoItems.appendChild(deleteTodo);

    const hover = document.createElement("p");
    hover.innerText = "Tap: check, Double tap: delete";
    hover.classList.add("deleteHover");
    todoItems.appendChild(hover);
    //append to list
    todoLists.appendChild(todoItems);
    }
    //clear description box
    inputDes.value = "";
  
}

function checkTodo(c) {
    const box = c.target;
    if(box.classList[0] === 'item_delete'){
        const checkList = box.parentElement;
        checkList.classList.toggle("complete");
        
        
    }
}

function deleteTodo(e) {
    
    const item = e.target;

    if(item.classList[0] === 'item_delete'){
        const tolist = item.parentElement;
        tolist.remove();
    }

    
}








   
