//declare all variables needed for all functions we are going to use
let inputField = document.getElementById("inputField");
inputField.classList.add("text");
let newListItem = document.createElement('div');
newListItem.innerHTML = localStorage.getItem("value"); 
let addNewButton = document.getElementById("addMe");
let unorderedList = document.getElementById("todoList");
let footerButton = document.getElementById("footerButton");


//Create functions to add, delete and clear all.
addNewButton.addEventListener('click', function(e){  
    e.preventDefault(); 

    //set a condition that would not allow you insert empty/blank spaces
    if(inputField.value.trim() === ""){
        return;
    }

    //create a div to hold the input from the input field
    newListItem = document.createElement('div'); 

    // newListItem.style.border = "2px solid white";
    //style the new div you created
    newListItem.style.margin ="0 auto";
    newListItem.style.display = "flex";
    newListItem.style.maxWidth = "75%";
    newListItem.style.justifyContent = "space-between";
    newListItem.style.padding = "0 4rem 1rem 0";

    //assign to local storage so that when your page is refreshed no data is lost.
    localStorage.setItem('value', inputField.value);
    newListItem.innerHTML = localStorage.getItem("value");

    //add the new list items ontop of your list using the prepend object method
    unorderedList.prepend(newListItem);
    
    //ensure that your input field is refreshed after the add button is clicked.
    inputField.value = "";
  
    
    //To strike out a task
    newListItem.addEventListener('click', function(){
        newListItem.style.textDecoration = "line-through";
    })

    //To remove the strike
    newListItem.addEventListener('dblclick', function(){
        newListItem.style.textDecoration = "none";
    })

    // const editButton = document.createElement("button");
    // editButton.classList.add("Edit");
    // editButton.innerHTML = "Edit";

    // newListItem.appendChild(editButton);
    //display the current date. Remember that it starts from zero, Jan= 0 and Dec = 11;
    const dateDisplay = document.createElement('span');
    dateDisplay.classList.add('date');
    let date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    dateDisplay.innerText = ' Created at ' + day + '-' + month + '-' + year;

    //This adds the current date to the todo list
    newListItem.appendChild(dateDisplay);

    //create a button that deletes the task you inputted earlier
    const deleteButton = document.createElement("button");
    //style the delete button
    deleteButton.style.backgroundColor ="red"; 
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "3px"
    deleteButton.style.borderRadius = "5px"
    deleteButton.classList.add("Delete");
    deleteButton.innerHTML = "Delete";

    //add the delete button to the todo list
    newListItem.appendChild(deleteButton);

    //create a function that allows you delete a task
    deleteButton.addEventListener('click', function(e){
    let newListItem = deleteButton.parentNode;
    newListItem.parentNode.removeChild(newListItem);
    })

    footerButton.addEventListener('click', function(){
        newListItem = "";
        unorderedList.innerText = newListItem;
    })


})













