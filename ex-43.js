// 43.Unchanged Magicians: Start with your work from Exercise 40. 
//    Call the function make_great() with a copy of the array of magicians’ names. 
//    Because the original array will be unchanged, return the new array and store it in a separate array. 
//    Call show_magicians() with each array to show that you have one array of the original names and one array with the 
//    Great added to each magician’s name.

const magician=["Aran","Root","Robin"]
function show_magicians(){
 for(let i=0;i<magician.length;i++){
    console.log(magician[i]);
 }   
}
show_magicians();

function make_great(){
    const great_magicians=magician.map((value,index)=>{
        return "greatings "+value
    })
    return great_magicians
}
console.log(make_great()); 
show_magicians()

