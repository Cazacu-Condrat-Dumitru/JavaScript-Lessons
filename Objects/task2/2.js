// Задача №2 - работа со свойствами
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let i in salaries) { //Loop through all the properties in an object 
	sum += salaries[i];
}
console.log(sum);