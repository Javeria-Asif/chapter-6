// Exercise 6.1
function addition(x, y) {
    sum = x + y
    return sum;
}
let variable1 = 3;
let variable2 = 4;
let result1 = addition(variable1, variable2);
console.log("Result 1: " + result1);
let variable3 = 6
let variable4 = 7
let result2 = addition(variable3, variable4)
console.log("Result 2: " + result2);
// Exercise 6.2
let arr1=["awsome",'creative', 'determined', 'energetic', 'friendly', 'intelligent', 'joyful', 'kind', 'talented']
function generateRandomValue() {
    let userNAme=prompt("Enter your name:")
    let randomIndex = Math.floor(Math.random() * arr1.length);
  let randomAdjective = arr1[randomIndex];
  console.log( `The name ${userNAme} is ${randomAdjective}`);
}
generateRandomValue()
// Exercise 6.3
let num1=3
let num2=8
let stringValue="+"
function calculator(num1,num2,stringValue) {
    if (stringValue=="+") {
       return num1+num2;
    }else if (stringValue=="-") {
       return num1-num2;
    }else {
console.log('Invalid operator. Defaulting to addition.');
return num1+num2
    }
}
console.log(`Result 1: ${calculator(num1, num2, stringValue)}`);

//PRACTICE 6.4


let resultsArray = [];

for (let i = 0; i < 10; i++) {
  let value1 = i * 5;
  let value2 = i * i;
  function calculateValues(param1, param2) {
    return param1 + param2;
  }
  let response = calculateValues(value1, value2);
  resultsArray.push(response);
}
console.log('Results Array:', resultsArray);


//PRACTOCE 6.5

let value = '1000';

(function() {
  let value = 'IIFE Local Value';
  console.log('Inside IIFE:', value);
})();

let result = (function() {
  let value = 'IIFE Expression Local Value';
  return value;
})();
console.log('IIFE Expression Result:', result);
(function(parameterValue) {
  let value = parameterValue;
  console.log('Anonymous Function:', 'Value assigned from parameter:', value);
})('Anonymous Function Local Value');


//PRACTICE 6.6

function calculateFactorial(n) {
    if (n === 0) {
      return 1;
    } else {

        return n * calculateFactorial(n - 1);
    }
  }
  
  
  function printFactorialResults(n) {
    if (n >= 0) {
      console.log(`Factorial of ${n} is: ${calculateFactorial(n)}`);
      printFactorialResults(n - 1);
    }
  }
  
  let initialNumber = 5; 
  
  printFactorialResults(initialNumber);
  

  // PRACTICE 6.7

  let start = 10;

function countdown(value) {

    console.log('Countdown:', value);

  if (value < 1) {
    return;
  }
  countdown(value - 1);
}

function countdownReverse(value) {

    console.log('Countdown Reverse:', value);

  if (value > 0) {

    value--;
    return countdownReverse(value);
  }
}

countdown(start);


countdownReverse(start);


// PRACTICE 6.8

let printArgumentFunction = function(argument) {
    console.log('Function Expression:', argument);
  };
  
  printArgumentFunction('Hello, World!');
  
  function printArgumentFunctionDeclaration(argument) {
    console.log('Function Declaration:', argument);
  }

  printArgumentFunctionDeclaration('Hello, World!');
  
// CHAPTER PRPOJECT
// Create a recursive function
function countUpToTen(currentNumber) {
    if (currentNumber > 10) {
      return;
    }
      console.log(currentNumber);
      countUpToTen(currentNumber + 1);
  }
  
  countUpToTen(1);
  countUpToTen(5); 
  countUpToTen(8); 

//  Set timeout order 
// Function to output the word "four" to the console and invoke the first function immediately and then the third function
const printFourAndInvoke = () => {
  console.log("Four");
  
  setTimeout(() => {
    printOne();
    
    setTimeout(() => {
      printThreeAndInvoke();
      
      setTimeout(() => {
        printTwo();
        
        setTimeout(() => {
          printOne();
        }, 0);
      }, 0);
    }, 0);
  }, 0);
};

// Invoke the functions
printFourAndInvoke();
;

  