// Задача №6 - добавление элементов в DOM
// Добавить в страницу таблицу 8*8. При помощи JS кода закрасить цвет фона чтобы получилась шахматная доска.
// Использовать querySelector*

table = document.querySelector(".table");

for (let x = 0; x < 8; x++) {
    row = table.insertRow(x);

    for (let i = 0; i < 8; i++) {

        row.insertCell(i).innerHTML = `${" "}`;
        table.rows[x].cells.item(i).height = "60px";
        table.rows[x].cells.item(i).width = "60px";
        if (table.rows.length % 2 == 0) {
            if (table.rows[x].cells.length % 2 == 0) table.rows[x].cells.item(i).bgColor = "black";
        } else if (table.rows.length % 2 == 1) {
            if (table.rows[x].cells.length % 2 == 1) table.rows[x].cells.item(i).bgColor = "black";
        }
    }
}