// Задача №7 - поиск элементов DOM
// Добавить в документ 10 ссылок (внешние которые начинаются на `https://` и внутренние в которых не содержится `https://`)
// Цвет текста внешних ссылок сделать красным.
// Примеры:
// внешняя ссылка `http://google.com`
// внутренняя ссылка `directory/page.html`

let addLinkAddress = (selector, link, color) => {
    for (let i = 0; i < selector.length; i++) {
        selector[i].href = link;
        selector[i].style.color = color;
    }
};

for (let i = 0; i < 20; i++) {
    link = document.createElement('a');
    if (i % 2 == 0) {
        link.className = "external";
        link.title = `External Link ${i}`;
        link.innerHTML = `External Link ${i}<br/>`;
    } else {
        link.className = "internal";
        link.title = `Internal Link ${i}`;
        link.innerHTML = `Internal Link ${i}<br/>`;
    }
    document.body.appendChild(link);
    console.log(link);
}

extLink = document.querySelectorAll(".external");
intLink = document.querySelectorAll(".internal");

addLinkAddress(extLink, "https://www.google.com", "red");
addLinkAddress(intLink, "/Arrays");