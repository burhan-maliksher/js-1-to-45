// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// initializing an array 
const  myFavPlaces=["Lahore","Uchali","Muree","Islamabad","Karachi"];
// sorted list in alphabetic order
const sortedList=myFavPlaces.slice().sort();
// sorted list in reverse alphabetic order
const reversedList=sortedList.slice().reverse();

// displaying list 
console.log("Orignal list "+myFavPlaces);
console.log("Alphabetic ordered list "+sortedList);
console.log("Orignal list "+myFavPlaces);
console.log("Reverse alphabetic ordered list "+reversedList);
console.log("Orignal list "+myFavPlaces);
console.log("Reversed orignal ordered list "+myFavPlaces.reverse());
console.log("Back to orignal ordered list "+myFavPlaces.reverse());
console.log("Orignal list in Alphabetic order "+myFavPlaces.sort());
console.log("Orignal list in reverse Alphabetic order "+myFavPlaces.reverse());
