/*********************************************************************************
* WEB222 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* Name: __Abiodun Oke______
********************************************************************************/
/******************* TASK 1 *********************/
var stdName = "Abiodun Oke";
var numCourse = 4;
var prog = "CPA";

// b. Output your student infor to the browser console as: 
//console.log("My name is " + stdName + " and I'm in " + prog + " program. " + "I'm taking " + numCourse + " course in this semester.");

/*c) Store the string “have” or “don’t have” into a variable based on the value of
the variable storing whether or not you have a part-time job (true/false).*/

var ptJob = "don't have";

console.log("My name is " + stdName + " and I'm in " + prog + " program. " +
            "I'm taking " + numCourse + " course in this semester. " + "and i " + 
           ptJob + " a part-time job now.");

/******************* TASK 2 *********************/

//a) Store the current year in a variable. 
//var d = new Date();
var cYear = d.getFullYear();


//b) Prompt to user
var age = prompt("Please enter your age: ");

//c) Output the birth year to the console as:
var bYear = cYear - age;
console.log("You were born in the year of " + bYear + ".");

/*d) Prompt to user “Enter the number of years you expect to study in the
college:” and store the input value in a variable.*/
var stdYear = prompt("Enter the number of years you expect to study in the college:");

/*e) Output the graduate year to the console as: "You will graduate from Seneca
college in the year of ???."*/
gradYear = d.getFullYear() + parseInt(stdYear);
console.log("You will graduate from Seneca college in the year of " + gradYear +".");

/******************* TASK 3 *********************/
//a) Store a Celsius temperature in a variable. 	
var celTemp = 37;
//b) Convert it to Fahrenheit and output: "???°C is ???°F".
fahTemp = celTemp * 9/5 + 32;
console.log(celTemp + "°C " + "is " + fahTemp + "°F" + ".");

//c) Store a Fahrenheit temperature into a variable.
var fahTemp = 98.6;

//d) Convert it to Celsius and output: "???°F is ???°C."
celTemp = (fahTemp - 32) * 5/9;
console.log(fahTemp + "°F " + "is " + celTemp + "°C" + ".");

/******************* TASK 4 *********************/
var i = 0;
for(i=0; i<10; i++)
    {
        if(i%2 ==0 )
            {
                console.log(i + " is even");
            }
       if(i%2 == 1)
           {
               console.log(i + " is odd");
           }
           
    }

/******************* TASK 5 *********************/
function largerNum(num1,num2){
  var lg = '';
  if(num1 > num2){
    lg = num1;
  }else{
    lg = num2;
  }
  console.log('The larger number of '+ num1 +' and '+ num2 + ' is '+ lg)
}
largerNum(10,20);
largerNum(5,2);
function evaluator(){
    var s = 0;
    var total = arguments.length;
    var avg = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
        avg = s/total;
    }
     if(avg >= 50){
        console.log('Average greater than or equal to 50: true');
      }else{
        console.log('Average greater than or equal to 50: false');
      }
}
console.log(evaluator(2,1,3,4,5));
console.log(evaluator(5,110,300,9,5));
console.log(evaluator(2,7,3,43,5));

/******************* TASK 7 *********************/
var Grader = function(numberMark){
  if( numberMark >= 80 && numberMark <= 100 ){
    console.log('Mark '+numberMark+', grade is A');
  }else if( numberMark >= 70 && numberMark <= 79 ){
    console.log('Mark '+numberMark+', grade is B');
  }else if( numberMark >= 60 && numberMark <= 69 ){
    console.log('Mark '+numberMark+', grade is C');
  }else if( numberMark >= 50 && numberMark <= 59 ){
    console.log('Mark '+numberMark+', grade is D');
  }else{
    console.log('Mark '+numberMark+', grade is F')
  }
}

Grader(40);
Grader(80);
Grader(67);

/******************* TASK 8 *********************/
function showMultiples(num,numMultiples){
  var i = 1;
  var result = 0;
  
  for(i = 1; i<=numMultiples;i++){
    result = num * i;
    console.log(num+'*'+i+'='+result + '\n');
  }
}

showMultiples(5,4);
