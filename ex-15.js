// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner,
//   so you need to send out a new set of invitations. 
//   You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. 
//   Add a print statement at the end of your program stating 
//   the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t
//   make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, 
//   one for each person who is still in your list.

// initializing an array objects
const  guestList=[
    {guest:"Ali"},
    {guest:"Ahmad"},
    {guest:"Bahadar"}
];
let dinnerMessage="I am Pleased to invite you to dinner on this Holiday at My Home";                    
// displaying objects stored in an array 
console.log(guestList[0].guest+" "+dinnerMessage);
console.log(guestList[1].guest+" "+dinnerMessage);
console.log(guestList[2].guest+" "+dinnerMessage);

//guest who can't come 
console.log("\n"+guestList[0].guest+" "+"could not come for dinner");

// replacing the guest
guestList[0].guest="ahad";

// new invitation list
console.log("\n"+guestList[0].guest+" "+dinnerMessage);
console.log(guestList[1].guest+" "+dinnerMessage);
console.log(guestList[2].guest+" "+dinnerMessage);