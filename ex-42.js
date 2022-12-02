// 42.Great Magicians: Start with a copy of your program from Exercise 39. 
//     Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//     Call show_magicians() to see that the list has actually been modified.

const magician=["Aran","Root","Robin"]
function show_magicians(){
 for(let i=0;i<magician.length;i++){
    console.log(magician[i]);
 }   
}
show_magicians();

function make_great(){
magician.forEach((value,index)=>{
    magician[index]="Grettings "+value;
})
}

make_great()
show_magicians()