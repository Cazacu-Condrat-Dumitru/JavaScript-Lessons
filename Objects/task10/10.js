// Задача №10 - работа с ключами объекта

// Создайте 2 объект person со следующей структурой:
// {
// 	name: `Person`,
// 	age: 123,
// 	salary: 1542.33,
// 	contacts: {
// 		phone: `112`,
// 		email: ‘email@domain.com’
// },
// address: `Moldova`
// }

// Напишите метод Intersection который получит на входе эти 2 объекта и вернет новый объект только из тех полей
//  значение которых равна о обоих объектов.

let person1 = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova'
};

let person2 = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova'
};

console.log(preson1.Intrersection(person2));