// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
//    write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// 1 test:for equality and inequality with strings
// 
let person = "ali";
// tests for equality result true
console.log(person == "ali")
// tests for equality result false     
console.log(person == "Ali")
// tests for inequality result true
console.log(person !== "Ali")
// tests for inequality result false     
console.log(person !== "ali")

// 2 test: Tests using the lower case function
// 
person.toLowerCase()
// tests result true
console.log(person == "ali")
// tests result false     
console.log(person == "Ali")

// 3 test:Numerical tests involving equality and inequality, greater than and less than, 
//        greater than or equal to, and less than or equal to
// 
let digit = 3;
// tests for equality result true
console.log(digit == 3)
// tests for equality result false     
console.log(digit == 4)
// tests for inequality result true
console.log(digit !== 4)
// tests for inequality result false     
console.log(digit !== 3)
// test for greater then result true
console.log(digit > 2);
// test for greater then result false
console.log(digit > 4);
// test for less then result true
console.log(digit < 4);
// test for less then result false
console.log(digit < 2);
// test for greater then or equal to result true
console.log(digit >= 3);
// test for greater then or equal to result false
console.log(digit >= 4);
// test for less then or equal to result true
console.log(digit <= 4);
// test for less then or equal to result false
console.log(digit <= 2);

// 4 test: using "and" and "or" operators
// 
let digit2 = 5;
// test using "and" operator result true 
console.log(digit == 3 && digit2 ==5);
// test using "and" operator result false 
console.log(digit == 2 && digit2 ==5);
// test using "or" operator result true 
console.log(digit == 2 || digit2 ==5);
// test using "or" operator result false 
console.log(digit == 2 || digit2 ==4);

// 5 Test: whether an item is in a array
// 
let myarr=["shoe","shirt","pant"];
// testing item is in an array result true
console.log(myarr.includes("shoe"));
// testing item is in an array result false
console.log(myarr.includes("mango"));

// 6 Test: whether an item is not in a array
// 
// let myarr=["shoe","shirt","pant"];
// testing item is not in an array result true
console.log(myarr.indexOf("mango")=== -1);
// testing item is not in an array result false
console.log(myarr.includes("sheo"));

