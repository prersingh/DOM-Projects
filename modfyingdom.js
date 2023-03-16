// Traversing the DOM //

//Parent Node

//let itemList = document.querySelector("#items")
//parentnode
//console.log(itemList.parentNode)

//itemList.parentNode.style.backgroundColor = "yellow"

//parent node in parent node

//console.log(itemList.parentNode.parentNode)

//parent node in parent node going again in node again and again


//console.log(itemList.parentNode.parentNode.parentNode.parentNode)




//Parent element is same as parent node
//let itemList = document.querySelector("#items")

//console.log(itemList.parentElement)

//itemList.parentElement.style.backgroundColor = "lightblue"

//console.log(itemList.parentElement.parentElement)

//console.log(itemList.parentElement.parentElement.parentElement.parentElement)




//Child Nodes

//let itemList = document.querySelector("#items")

//console.log(itemList.childNodes)
//it also takes 1 node for space if we given space ..but if we get direx







//Children element means only give elements not any space of anything

//let itemList = document.querySelector("#items")

//console.log(itemList.children)
//itemList.children[1].style.backgroundColor = "red"

//console.log(itemList.children[1])
//console.log(itemList.children[3])




//we have first and last child

//console.log(itemList.firstChild)

//console.log(itemList.firstElementChild)

//itemList.firstElementChild.textContent = "prerana"

//console.log(itemList.lastChild)

//itemList.lastElementChild.textContent = "singh"

//console.log(itemList.lastElementChild)




// We have also the sibling

//console.log(itemList.nextSibling)

//console.log(itemList.nextElementSibling)

//itemList.nextElementSibling.textContent = "singh"

//if any sibling have it does print else give null. sibling means having another node or element

//console.log(itemList.previousSibling)

//console.log(itemList.previousElementSibling)

//itemList.previousElementSibling.style.color = "blue"








// create element and add in the live//



// create element
let newDiv = document.createElement("div")

// add class
newDiv.className = "Hello";

//add id
newDiv.id = "hello1";

//add attribute 
newDiv.setAttribute("title","hello Div");

//create text node
let newDivText = document.createTextNode("I am Prerana Singh");

//add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");


container.insertBefore(newDiv,h1)

newDiv.style.fontSize = "40px"



//////////////////////////////////////

let a = document.getElementById("items");

let b = document.createElement("li");
b.textContent = "Hello World";

a.insertBefore(b, a.firstChild);