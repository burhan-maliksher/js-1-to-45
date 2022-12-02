// 3.Name Cases: Store a person’s name in a variable, 
//   and then print that person’s name in lowercase, uppercase, 
//   and titlecase.

// intilazing variable
let person_name="bUrHaN";

// converting variable to uppercase
console.log(person_name.toUpperCase());

// converting variable to lowercase
console.log(person_name.toLowerCase());

// converting variable to titlecase
let lower_case=person_name.toLowerCase();
let title_case=lower_case[0].toUpperCase()+lower_case.slice(1);
console.log(title_case);