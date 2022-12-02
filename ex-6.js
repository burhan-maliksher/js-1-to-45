// 6.Stripping Names: Store a person’s name,
//   and include some whitespace characters at the beginning 
//   and end of the name. Make sure you use each character 
//   combination, "\t" and "\n", at least once.
//   Print the name once, so the whitespace around the name is displayed. 
//   Then print the name after striping the white spaces.

// intilazing variable with whitespace characters
let personName1="\tAllama Muhammad Iqbal\t ";
let personName2="\nAllama Muhammad Iqbal\n ";

// striping whitespaces
let stripSpaces1=personName1.trim();
let stripSpaces2=personName2.trim();

// printing variables
console.log(personName1);
console.log(personName2);
console.log(stripSpaces1);
console.log(stripSpaces2);