// 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//    The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size_of_shirt,msg){
    let size=size_of_shirt
    let massage=msg
    console.log(`Size of shirt is ${size} \n Printted "${massage}"`);
}
// calling function
make_shirt("m","Time Never Wait")