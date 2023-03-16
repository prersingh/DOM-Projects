//Examine the document object

//console.dir(document);

//console.log(document.domain)
//console.log(document.title)
//console.log(document.URL)
//console.log(document.body)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all[10]);
// document.all[10].textContent = "Ankush"
//console.log(document.forms)
//console.log(document.links)
//console.log(document.images)

//console.log(document.getElementById("header-title"));

//let headertitle = document.getElementById("header-title");
//let mainheader = document.getElementById("main-header");
//console.log(headertitle)

//headertitle.textContent = "Bye"
//headertitle.innerText = "Joker"

//headertitle.innerHTML = "<h1>Hello</h1>"

//headertitle.style.borderBottom = "solid 3px black"
//mainheader.style.border = "solid 3px black"





// GET ELEMENT BY CLASS NAME

//let items = document.getElementsByClassName("list-group-item")
//console.log(items)
//console.log(items[0])
//items[0].textContent = "Ankush"
//items[0].style.fontWeight = "bold"
//items[1].style.fontWeight = "bold"
//items[2].style.fontWeight = "bold"
//items[3].style.fontWeight = "bold"
//items[2].style.backgroundColor = "green"

//color code also work for separate elements
//items[2].style.backgroundColor = "#f4f4f4"


// THis will not work
// items.style.backgroundColor = "#f4f4f4"


//This will work
//for(i=0;i<items.length;i++){
    //items[i].style.backgroundColor = "#f4f4f4"
//}


// GET ELEMENT BY TAG NAME
// this means going by tag line h1,li,h3

//let li = document.getElementsByTagName("li")
//console.log(li)
//console.log(li[0])
//li[0].textContent = "Ankush"
//li[0].style.fontWeight = "bold"
//li[1].style.fontWeight = "bold"
//li[2].style.fontWeight = "bold"
//li[3].style.fontWeight = "bold"
//li[3].style.backgroundColor = "green"

// QUERYSelector

//let header = document.querySelector("#main-header")
//header.style.borderbottom = "solid 4px black"


//let input = document.querySelector("input")
//input.value = "Hello world"

//let submit = document.querySelector("input[type='submit']")
//submit.value="SEND"

//let item = document.querySelector(".list-group-item")
//item.style.color = "green"

//let lastitem = document.querySelector(".list-group-item:last-child")
//lastitem.style.color = "blue"

//let seconditem = document.querySelector(".list-group-item:nth-child(2)")
//seconditem.style.color = "yellow"

let seconditem = document.querySelector(".list-group-item:nth-child(2)")
seconditem.style.display = "none"


// QueryselectAll
let title = document.querySelectorAll(".title");
console.log(title)
title[0].textContent = "Hello"

let odd = document.querySelectorAll("li:nth-child(odd)");
for (let i=0;i<odd.length;i++){
  odd[i].style.backgroundColor = "yellow"
}

let even = document.querySelectorAll("li:nth-child(even)");
for (let i=0;i<even.length;i++){
  even[i].style.backgroundColor = "green"
}