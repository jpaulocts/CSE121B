let array = ['A', 'B', 'A'];

let new_array = array.map(function grade(grade) {
    if (grade === 'A') {
       grade = 4; 
    } else if (grade === "B"){
        grade = 3;
    }
    return grade;
    });

let initialValue = 0

let sum = new_array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
document.getElementById("mylist").innerHTML = sum;


