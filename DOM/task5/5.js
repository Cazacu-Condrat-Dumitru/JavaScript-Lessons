// адача №5 - обработка событий и изменение элементов DOM 
// Добавить в страницу следующие элементы (кнопка, инпут, кнопка)

// Задачи:
// При нажатии на `-`, значение из инпута уменьшается на 1 
// При нажатии на `+`, значение из инпута увеличивается на 1
// Вручную в инпут вводить нельзя.
// инпут может получить только значения из интервала 0-9
// если в инпут 0, кнопку `-` сделать неактивной
// если в инпут 9, кнопку `+` сделать неактивной
// использовать getElementById

// PS: нельзя писать onclick в HTML документе. Весь код должен быть в отдельном JS файле
//  (это относится ко всем следующим задачам).

const btnPlus = document.getElementById("btn_plus");
let input_s = document.getElementById("inputS")
const btnMinus = document.getElementById("btn_minus");

input_s.disabled = true;
input_s.value = 0;
btnMinus.disabled = true;

btnPlus.onclick = () => {
    if (input_s.value >= 0 && input_s.value <= 9) {
        input_s.value++;
        if (input_s.value == 9) {
            btnPlus.disabled = true;
        } else {
            btnMinus.disabled = false;
        }
    }
};

btnMinus.onclick = () => {
    if (input_s.value >= 0 && input_s.value <= 9) {
        input_s.value--;
        if (input_s.value == 0) {
            btnMinus.disabled = true;
        } else {
            btnPlus.disabled = false;
        }
    }
}