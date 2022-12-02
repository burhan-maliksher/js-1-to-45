// 16.More Guests: You just found a bigger dinner table, 
//    so now more space is available. 
//    Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
//   Add a print statement to the end of your program informing 
//   people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, 
//   one for each person in your list.

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