/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1, number2) {
    return number1 + number2;
}

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers() {
let number1 = parseFloat(document.querySelector("#addend1").value);
let number2 = parseFloat(document.querySelector("#addend2").value);

var sum = add(number1, number2);

// Step 4: Assign the return value to an HTML form element with an ID of sum

document.querySelector("#sum").value = sum;

}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

const plus = document.querySelector('#addNumbers');
plus.addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
let subtract = function (number1,number2) {
    return number1 - number2;
}

let subtractNumbers =  function () {
    let number1 = parseFloat(document.querySelector("#minuend").value);
    let number2 = parseFloat(document.querySelector("#subtrahend").value);

    let minus = subtract(number1,number2);

    document.querySelector("#difference").value = minus;
}

const subctration = document.querySelector('#subtractNumbers');
subctration.addEventListener('click', subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (number1, number2) => { return number1 * number2};

const multiplyNumbers = () => {
    let number1 = parseFloat(document.querySelector("#factor1").value);
    let number2 = parseFloat(document.querySelector("#factor2").value);

    let product = multiply(number1,number2);

    document.querySelector("#product").value = product;
}

const multiplication = document.querySelector('#multiplyNumbers');
multiplication.addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (number1, number2) => { return number1 / number2};

const divideNumbers = () => {
    let number1 = parseFloat(document.querySelector("#dividend").value);
    let number2 = parseFloat(document.querySelector("#divisor").value);

    let product = divide(number1,number2);

    document.querySelector("#quotient").value = product;
}

const division = document.querySelector('#divideNumbers');
division.addEventListener('click', divideNumbers);


// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

const time = new Date();

// Step 2: Declare a variable to hold the current year
const year = time.getFullYear();
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

const range = (start, end, step) => {
    const array = [];
    for (let i = start; i <= end; i = i + step) {
        array.push(i);
    }
    return array;
}

const myarray = range(1, 25, 1);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector("#array").textContent = myarray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

const oddnumber = x => x % 2 != 0;

const odds = myarray.filter(oddnumber);

document.querySelector("#odds").textContent = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

const evennumber = y => y % 2 === 0;

const evens = myarray.filter(evennumber);

document.querySelector("#evens").textContent = evens;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue = 0;
const reduced = myarray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); 

document.querySelector("#sumOfArray").textContent = reduced;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

const multiplied = myarray.map(a => a * 2)
document.querySelector("#multiplied").textContent = multiplied;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
var sumOfMultiplied = myarray.map(b => b * 2);
var sumOfMultiplied = sumOfMultiplied.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
