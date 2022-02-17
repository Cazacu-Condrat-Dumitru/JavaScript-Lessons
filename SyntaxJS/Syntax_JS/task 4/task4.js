const ucFirst = function (str){
	alert(`Initial Word: ${str}
Changed word: ${str[0].toUpperCase() + str.slice(1)}`);
}
ucFirst(prompt('Write your world without capitalize'));