const user = prompt('Write your name');

alert(`Hello ${user}`);

let answer = (confirm(`Do you know JavaScript?`)) ? alert(`Good`) : alert(`You can start learning it right now!`);

if (confirm(`Do you know JavaScript?`)){
  alert(`Good`);
}
else{
  alert(`You can start learning it right now!`);
}