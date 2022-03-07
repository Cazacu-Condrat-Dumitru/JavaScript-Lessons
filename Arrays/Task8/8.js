// Задача №8 - функции обработки массивов
// Задан массив
// const colors = [“red”, “green”, “blue”];
// Написать функцию
// checkColor(color)
// которая вернет позицию цвета в массиве если она есть или -1 если цвета нет.


const colors = ["red", "green", "blue"];

const checkColor = (color) => colors.indexOf(color);



console.log(checkColor(`red`));