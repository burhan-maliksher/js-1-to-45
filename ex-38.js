// 38.Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//    The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
//    Call your function for three different cities, at least one of which is not in the default country.
 
function describe_city(city,country="Pakistan"){
    let city_var=city
    let country_of_city=country
    console.log(`${city_var} is in ${country_of_city}`);
}
// calling function
describe_city("Karachi")
describe_city("Lahore")
describe_city("Madina","Kingdom of Saudia Arabia")