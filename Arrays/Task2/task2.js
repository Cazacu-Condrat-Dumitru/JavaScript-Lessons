const list = [{
            name: "Dima",
            marks: [1, 2, 3, 4, 5, 2, 3]
        },
        {
            name: "Ion",
            marks: [4, 2, 2, 7, 1, 10]
        },
        {
            name: "Cristina",
            marks: [6, 7, 8, 9]
        },
        {
            name: "Alex",
            marks: [9, 9, 9, 9, 9]
        },
        {
            name: "Max",
            marks: [4, 8, 4, 2, 10, 9, 9, 9]
        }

    ]
    //The reduce() method executes a reducer function on each element of the array
    //resulting in a single output value.

const average = list.map(result => ({
    name: result.name,
    avg: result.marks.reduce((item, index) => item + index) / result.marks.length
}));
console.log(average);

// FIND only returns the first element that he founds while FILTER returns all elements
const resultLowerAverage = average.filter(item => item.avg < 5);
console.log(`Students with average mark lower than 5:`, resultLowerAverage);

const max = (average) => {
    let max = 0;
    let a = 0;
    for (let i = 0; i < list.length; i++) {
        if (max < average[i].avg) {
            a = i;
            max = average[i].avg;
        }
    }
    console.log(`The student with the highest grade is:`, average[a]);
}

max(average);

const min = (average) => {
    let min = 10;
    let a = 0;
    for (let i = 0; i < list.length; i++) {
        if (min > average[i].avg) {
            a = i;
            min = average[i].avg;
        }
    }
    console.log(`The student with the  minimal is:`, average[a]);
}

min(average);