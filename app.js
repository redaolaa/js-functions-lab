/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
 /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(number) {
if (number >=18) {
    return 'Adult';
} else {
    return 'Minor';
}
}


console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(11));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel(character) {
if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
return true;
} else {
return false;
}
}

function isCharAVowel(char) {
if ('aeiouAEIOU' .includes (char)) {
    return true
}else {
    return false
}
}

function isCharAVowel(char) {
    return 'aeiouAEIOU' .includes (char)
}


console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("f"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/





console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


function generateEmail(name, domain) {

return name + domain
}
console.log("This is an email", generateEmail("sarah", "@gmail.com"))


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/


function greetUser (name,time) {
return "Good" + " " + time + " " + name
} 

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

function greetUser2 (name,time) {
    return `Good ${time}, ${name}`
    } 
    // template literal `${}` can be used to combine string with variable like above Good and ${time}, ${name}//

    console.log('Exercise 5 Result:', greetUser2("Sam", "morning"));


    /*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree (number1, number2, number3){
if (number1 >= number2 && number1 >=number3) {

    return number1;
} else if ( number2>=1 && number2>=3) {
    return number2;
} else {
    return number3;
}

}
//what if all 3 numbers are equal??

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('Exercise 6 Result:', maxOfThree(8, 8, 8));
console.log('Exercise 6 Result:', maxOfThree(50, 10, 8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip (bill, percentage){
    let tip= (bill * percentage) /100;
    return tip;



}

console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature (Fahrenheit, Celsius) {
    let conversion = (Fahrenheit - 32) /2;
   return conversion + "C";


}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator (number1, number2, operation){


if (operation ==='add'){
    return  number1 + number2;
} else if (operation === 'subtract') {
    return number1 - number2;
} else if (operation ==='multiply'){
    result= number1 * number2;
} else if (operation === 'divide'){
    return number1 / number2;
}
return number1 / number2;
}



console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));



