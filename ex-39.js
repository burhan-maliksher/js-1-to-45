// 39.City Names: Write a function called city_country() that takes in the name of a city and its country.
//    The function should return a string formatted like this:

//    "Lahore, Pakistan"

//    Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(city,country){
    let city_var=city
    let country_of_city=country
    let city_country_pair=`"${city_var}, ${country_of_city}"`;
    return city_country_pair;
}
// calling function
let x=city_country("Karachi","Pakistan")
console.log(x);
x=city_country("Lahore","Pakistan")
console.log(x);
x=city_country("Madina","Kingdom of Saudia Arabia")
console.log(x);
