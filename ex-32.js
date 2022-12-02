// 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need
//   to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// existing username list
let current_users=[
    {user:"ali"},
    {user:"ahmed"},
    {user:"bahadur"},
    {user:"safdar"},
    {user:"mudasir"},
    {user:"hadir"}
]
// new username list
let new_users=[
    {user:"Arshad"},
    {user:"Ali"},
    {user:"Bahadur"},
    {user:"afnan"},
    {user:"mubashir"},
    {user:"Hadir"}
]

// loop for validating  user names 
for(let i=0;i<new_users.length;i++){
    let n_user=new_users[i].user
    let verifing_new_user=n_user.toLowerCase()

    let c_user=[]
    
    // checking new_user name in existing users list 
    for(let i =0;i <current_users.length;i++){
        c_user.push(current_users[i].user.includes(verifing_new_user))

    }
    // checking username used or not
    if(c_user.includes(true)){
        console.log(`${verifing_new_user} person will need to enter a new username`); 
    }
    else{
        console.log(`${verifing_new_user} username is available`);
    }
}

