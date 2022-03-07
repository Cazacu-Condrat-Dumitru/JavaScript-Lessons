// Задача №9 - добавление элементов в DOM
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification">{{ message }}</div>
//  с заданным содержимым. 
// Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   message: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });

// Используйте CSS-позиционирование для отображения элемента в заданных координатах.

function showNotification(options) {
    div = document.createElement("div");
    div.className = "welcome";
    div.innerHTML = options;
    div.style.marginTop = "10px";
    div.style.marginLeft = "10px";
    document.body.appendChild(div);
    const b = setTimeout(() => { div.innerHTML = "" }, 1500);
}

showNotification("Hello");