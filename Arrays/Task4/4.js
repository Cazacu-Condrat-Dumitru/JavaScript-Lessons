// Задача №4 - обработка массива
// Напишите функцию sumInputNumbers(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0»

let array = [];
console.log(array);

function sumInputNumbers() {
    let sum = 0;
    let number;
    do {
        number = prompt('Write a number');
        if (number === '') {
            number = null;
        } else {
            number === number;
        }
        array.push(Number(number)); //Converting the string to a number, since prompt - returns a string, not a number
    } while (number != null);
    sum = array.reduce((item, index) => item + index);
    console.log(`The sum of the numbers from the array is: ${sum}`);
}

sumInputNumbers();