// GET ELEMENT BY CLASS NAME

let items = document.getElementsByClassName("list-group-item")
console.log(items)
console.log(items[0])
items[0].textContent = "Prerana"
items[0].style.fontWeight = "bold"
items[1].style.fontWeight = "bold"
items[2].style.fontWeight = "bold"
items[3].style.fontWeight = "bold"
items[2].style.backgroundColor = "green"

//color code also work for separate elements
//items[2].style.backgroundColor = "#f4f4f4"


// THis will not work
// items.style.backgroundColor = "#f4f4f4"


//This will work
//for(i=0;i<items.length;i++){
    //items[i].style.backgroundColor = "#f4f4f4"
//}