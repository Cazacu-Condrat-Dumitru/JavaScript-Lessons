// Задача №9 - функции обработки массивов
// Задан массив [1, “a”, 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]
// Напишите функцию filter которая удалить лишнее из массива (все что не является цифрой) и вернет чистый массив
//  [1, 2,  3, 4, 5, 6, 7, 8, 9]


const array = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
console.log(array);

const filter = function () {
    return array.filter(arr => typeof (arr) === "number");
}
/*function filter() {
    return array.filter(arr => typeof (arr) === "number");
}*/

console.log(filter());