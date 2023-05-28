function getGrades(inputSelector) {
    // get grades from the input box

    let grades = document.querySelector("#grades").value;
    
    // split them into an array (String.split(','))
    
    let gradeArray = grades.split(",");

    
    let gradeArraycorrected = gradeArray.map((grade) => grade.trim().toUpperCase()); 
    
    console.log(gradeArraycorrected);
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
   
   
        
    // return grades

    return gradeArraycorrected;

  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let point;
    if (grade == "A" ) {
        point = 4;

    } else if (grade == "B" ) {
        point = 3;
    } else if (grade == "C") {
        point = 2;

    } else if (grade == "D") { 
        point = 1;
    } else {
        point = 0;
    }

    return point;

  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in

    let arrayCalculate = grades;
    // convert the letter grades to gpa points
    let gpaPoints = arrayCalculate.map(lookupGrade);
    // calculates the GPA

    let initialValue = 0;

    let total = gpaPoints.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    let gpaMean = total / gpaPoints.length ; 
    // return the GPA

    return gpaMean.toFixed(2) ; 
  }
  
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector

    let output = document.querySelector(selector); 
    output.innerText = gpa;

  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input

    let grade = getGrades();
    // calculate the gpa from the grades entered
    let gpa = calculateGpa(grade);
    // display the gpa

    outputGpa(gpa, "#output");
  }
  
  const calc = document.querySelector("#submitButton");
  calc.addEventListener("click", clickHandler);
