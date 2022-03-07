//1
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "red";
});

//2
setTimeout(() => {
    document.body.style.backgroundColor = "green";
}, 3000)

//3
let btn = document.createElement("button");
btn.innerHTML = "Orange";
btn.addEventListener("click", function() {
    document.body.style.background = "orange";
});
document.body.appendChild(btn);

//4let counter = 0;//Nr4
const ol_list = document.querySelector(".list");

let list = document.getElementById("listCreator");

function createList(list) {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            p = document.getElementById("listCreator").innerHTML += "<p style=" + "background-color:green" + ">" + `Paragraful Nr ${ i }` + "</p>";
        } else {
            p = document.getElementById("listCreator").innerHTML += "<p style=" + "background-color:purple;>" + `Paragraful Nr ${ i }` + "</p>";
        }
    }
}
createList();