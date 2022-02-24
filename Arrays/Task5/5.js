// Задача №5 - стрелочные функции обработки массивов
// Напиши функцию convert(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
// function square(x) { return x * x; } // возведение в квадрат
// console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(convert(square, [])); // []

function convert(fn, array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
      arr.push(square(array[i]));
  }
  return arr;
}

function square(x) {
  return x * x;
}//squaring 

console.log(convert(square, [1, 2, 3, 4]));//1,4,9,16
console.log(convert(square, []));//[]