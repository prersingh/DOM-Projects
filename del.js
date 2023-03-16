let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

//form submit event

document.addEventListener("submit", addItem);

//add item

function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    let deleteBtn = document.createElement("delete");

    //add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //append text node
    deleteBtn.appendChild(document.createTextNode("Delete"))

    //append button to li
    li.appendChild(deleteBtn)


    //append li to list
    itemList.appendChild(li)

}




//Delete event
itemList.addEventListener("click",removeItem);

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}