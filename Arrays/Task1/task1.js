//Method For
const array = ['a', 'b', 'c']
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Method forEach
array.forEach((element, array) => console.log(array));

//Method for of
//The in operator returns true if the specified property is in the specified object or its prototype chain.
for (let n of array) {
    console.log(n);
}

//Method for in
for (let object in array) {
    console.log(array[object]);
}

//Method while
let x = 0;
while (x < array.length) {
    console.log(array[x])
    x += 1;
}

//Method do while
let a = 0
do {
    console.log(array[a])
    a += 1
}
while (a < array.length);

//Method map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let map = new Map;

map.set('a', 'b', 'c');

console.log(map.get('a'));
