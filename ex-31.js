// 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let person=[
    {age:1},
    {age:3},
    {age:4},
    {age:20},
    {age:65},
    {age:90}
]
// removing all users age from array
person.length=0

if(person!=0){
    for(let i=0;i<person.length;i++){
        let age =person[i].age;
        if(age < 2){
            console.log("person is a baby")
        }else if(age== 2 || age < 4){
            console.log("person is a toddler")
        }else if(age== 4 || age < 13){
            console.log("person is a kid")
        }else if(age== 13 || age < 20){
            console.log("person is a teenager")
        }else if(age== 20 || age < 65){
            console.log("person is an adult")
        }else if(age>= 65 ){
            console.log("person is an elder")
        }
    }
}else{
    console.log("We need to find some user");
}