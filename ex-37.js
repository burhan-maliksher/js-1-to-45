// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
//    Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size_of_shirt="L",msg="I love JavaScript"){
    let size=size_of_shirt
    let massage=msg
    console.log(`Size of shirt is ${size} \n Printted "${massage}"`);
}
// calling function
make_shirt()
make_shirt("M")
make_shirt("S","Time Never Wait")