// Задача №3 - методы объекта
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);	

function multiplyNumeric(obj){
	for(let i in obj){
    if ((typeof(obj[i]) == "number")){
    obj[i] *= 2;         //Checks if there is a number and multiplies it by 2. 
  }
}
}