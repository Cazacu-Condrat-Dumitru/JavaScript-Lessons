// Задача №7 - getters
// Создайте объект person со следующей структурой:
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

// Создайте по одной функции get для каждого поля объекта (функции/методы должныдолны принадлежать объекту)

let person = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova',


    get nameUser() {
        console.log(this.name);
    },
    get ageUser() {
        console.log(this.age);
    },
    get salaryUser() {
        console.log(this.salary);
    },
    get contactsUser() {
        console.log(this.contacts);
    },
    get phoneUser() {
        console.log(this.phone);
    },
    get emailUser() {
        console.log(this.email);
    },
    get addressUser() {
        console.log(this.address);
    }
};
console.log(person);