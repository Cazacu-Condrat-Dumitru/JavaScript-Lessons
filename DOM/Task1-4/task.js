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
btn.addEventListener("click", function () {
    document.body.style.background = "orange";
});
document.body.appendChild(btn);

//4
