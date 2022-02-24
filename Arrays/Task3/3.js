//1) Creating an array witch contains jazz and blues
let styles = ['Jazz', 'Blues'];
console.log(styles);

//2)Adding Rock-and-roll at the end
styles[5] = 'Rock-and-roll'
console.log(styles);

//3)Switching the middle value to Classic
styles.splice(1, 1, 'Classic');
console.log(styles);

//4)Deleting the first element
styles.shift();
console.log(styles);

//5)Adding rap and reggae at the beginning
styles.unshift('Rap', 'Reggae');
console.log(styles);

