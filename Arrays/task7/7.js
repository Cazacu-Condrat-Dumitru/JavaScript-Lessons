// Задача №7 - функции обработки массивов
// Задан массив [1, 2, 3, 4, 5, 6, 7, 8, 9]. Написать функцию которая возвращает элементы этого массива, 
//начиная с позиции start по позиции end.

// extract(2, 4) вернет [3, 4, 5]


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function extract(start, end) {
    return array.slice(start, end + 1);
}

console.log(extract(2, 4)); //extract(2, 4) will return  [3, 4, 5]