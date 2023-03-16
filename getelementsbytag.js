// GET ELEMENT BY TAG NAME
// this means going by tag line h1,li,h3

let li = document.getElementsByTagName("li")
console.log(li)
console.log(li[0])
li[0].textContent = "prerana"
li[0].style.fontWeight = "bold"
li[1].style.fontWeight = "bold"
li[2].style.fontWeight = "bold"
li[3].style.fontWeight = "bold"
li[3].style.backgroundColor = "green"