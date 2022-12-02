// 17.Shrinking Guest List: You just found out 
// that your new dinner table won’t arrive in time 
// for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. 
//   Add a new line that prints a message saying that
//   you can invite only two people for dinner.
// • Remove guests from your list one at a time until only 
//   two names remain in your list. 
//   Each time you pop a name from your list, 
//   print a message to that person letting them know you’re 
//   sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your
//   list, letting them know they’re still invited.
// • Remove the last two names from your list, 
//   so you have an empty list. Print your list to make sure
//   you actually have an empty list at the end of your program.

// initializing an array objects
const  dinnerTable=[
    {guest:"Ali"},
    {guest:"Ahmad"},
    {guest:"Bahadar"}
];
let dinnerMessage="I am Pleased to invite you to dinner on this Holiday at My Home";                    
// displaying objects stored in an array 
console.log(dinnerTable[0].guest+" "+dinnerMessage);
console.log(dinnerTable[1].guest+" "+dinnerMessage);
console.log(dinnerTable[2].guest+" "+dinnerMessage);

//guest who can't come 
console.log("\n"+dinnerTable[0].guest+" "+"could not come for dinner");

// replacing the guest
dinnerTable[0].guest="ahad";

// new invitation list
console.log("\n"+dinnerTable[0].guest+" "+dinnerMessage);
console.log(dinnerTable[1].guest+" "+dinnerMessage);
console.log(dinnerTable[2].guest+" "+dinnerMessage);

// new three guest for added for big table
const bigdinnerTable=[
    {guest:"Talal"},
    {guest:"Bilal"},
    {guest:"Ubaid"}
];

//Printing the names of three more guests found for big dinner table 
console.log(bigdinnerTable[0].guest+", "+bigdinnerTable[1].guest+", "+bigdinnerTable[2].guest+" are the three new guests found for a big table dinner");

// adding one new guests name at the top of invitation list
dinnerTable.unshift(bigdinnerTable[0]);

// adding one new guest at the middle of dinner invitation list
dinnerTable.splice(2,0,bigdinnerTable[1]);

// adding one new guest at the end of the list of invitation using append()
dinnerTable.push(bigdinnerTable[2]);

// invitation list for big dinner table
console.log("\n"+dinnerTable[0].guest+" "+dinnerMessage);
console.log(dinnerTable[1].guest+" "+dinnerMessage);
console.log(dinnerTable[2].guest+" "+dinnerMessage);
console.log(dinnerTable[3].guest+" "+dinnerMessage);
console.log(dinnerTable[4].guest+" "+dinnerMessage);
console.log(dinnerTable[5].guest+" "+dinnerMessage);

// printing message for limiting invitations to 2 guests only
console.log("I am inviting only two guests for dinner");

// removing all guests except two from list and writing them an appology 
// 1
let rmGuest=dinnerTable.pop();
console.log(rmGuest.guest+" sorry as I won't be able to give you a dinner");
// 2
rmGuest=dinnerTable.pop();
console.log(rmGuest.guest+" sorry as I won't be able to give you a dinner");
// 3
rmGuest=dinnerTable.pop();
console.log(rmGuest.guest+" sorry as I won't be able to give you a dinner");
// 4
rmGuest=dinnerTable.pop();
console.log(rmGuest.guest+" sorry as I won't be able to give you a dinner");

// printing messages to guests which are still invited
console.log(dinnerTable[1].guest+" you are still invited to dinner");
console.log(dinnerTable[0].guest+" you are still invited to dinner");

// removing the remaing two guests
// 1
rmGuest=dinnerTable.pop();
// 2
rmGuest=dinnerTable.pop();

// printing empty list
rmGuest=dinnerTable[0];
console.log(rmGuest+" So the dinnerTable guest list is empty as the result is undefined");