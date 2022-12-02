// 45.Cars: Write a function that stores information about a car in a Object. 
//    The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//    Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//    Print the Object that’s returned to make sure all the information was stored correctly. 

function car_order(manufacturer_name,model_name,...optional){
    const car={
        manufacturer:manufacturer_name,
        model:model_name,
        optional_feature:optional
    }
    return car;
}
// calling function
let x=car_order("honda","civic",`color:"red"`,`Sun_roof:"yes"`)
console.log(x);
