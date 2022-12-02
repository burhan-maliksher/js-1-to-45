// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//    print a message indicating the number of people you are inviting to dinner.

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
// printing the no of guests
console.log("Number of guests invinted are "+dinnerTable.length);


