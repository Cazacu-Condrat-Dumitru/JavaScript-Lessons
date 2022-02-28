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
    this.name = 'Dima';
    return this.name;
  },
  get ageUser() {
    age = 20;
    return this.age;
  },
  get salaryUser() {
    salary = 0;
    return this.salary;
  },
  get contactsUser() {
    phoneconNew = '+37369336576';
    emailNew = 'email@gmail.com';
    this.contacts.phone = phoneconNew;
		this.contacts.email = emailNew;
  },
  get addressUser() {
    address = 'Alexandru cel Bun';
    return this.address;
  }
};
console.log(person);