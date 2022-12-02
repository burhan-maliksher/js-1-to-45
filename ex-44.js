// 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//    The function should have one parameter that collects as many items as the function call provides,
//    and it should print a summary of the sandwich that is being ordered.
//    Call the function three times, using a different number of arguments each time.

// returns summary of items in sandwitch
function order(...items){
    const sandwich=items
    return sandwich
 }

// // 1st call
summary=order("egg","salad","red-chilli","garlic","beaf","green-chilli")
console.log(summary)

// // 2nd call
summary=order("egg","salad","red-chilli","chicken")
console.log(summary)

// 3rd call
summary=order("egg","salad","red-chilli")
console.log(summary)

