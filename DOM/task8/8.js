// Задача №8 - добавление элементов в DOM
// Добавить в странице нумерованный список(ol), поле ввода имени(input) и кнопку.
// При нажатии на кнопку:
// значение из инпута добавляется в список (в конце) инпут очистить от текста
// добавление будет работать только если в инпут что то введено. если в инпуте ничего нет, кнопка должна быть неактивной.
// 	При нажатии на li, выводить алерт с текстом который содержится внутри него.

input = document.createElement("input");
btn = document.createElement("button");
ol_list = document.createElement("ol");

ol_list.className = "mainList";
ol_list.setAttribute("id", "list");

btn.innerHTML = "Introduce";
input.style.fontSize = "40px";
btn.style.fontSize = "40px";
document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(ol_list);

btn.disabled = true;

input.addEventListener('keyup', () => {
    if (input.value == "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
})

btn.onclick = () => {
    let li = document.createElement("li");
    li.textContent = input.value;
    ol_list.appendChild(li);
    input.value = null;
    btn.disabled = true;
}

document.getElementById('list').addEventListener('click', function(event) {
    if ('LI' != event.target.tagName) return;
    alert(event.target.innerText);
}, false);