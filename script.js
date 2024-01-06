
/*Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

function combinations(){
    let result = 1
    for(let i=0; i<arguments.length; i++){
        result *= arguments[i]
    }
    return result
}


console.log(combinations(2, 3));        // 6
console.log(combinations(3, 7, 4));     // 84
console.log(combinations(2, 3, 4, 5));  // 120


------------------------------------------------------------------------------------------------------------------------------*/


/*An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

function isPositiveDominant(arr) {
    const uniqueValues = new Set(arr);
    let positiveCount = 0;
    let negativeCount = 0;

    uniqueValues.forEach(value => {
        if (value > 0) {
            positiveCount++;
        } else if (value < 0) {
            negativeCount++;
        }
    });

    return positiveCount > negativeCount;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));  // Output: false
console.log(isPositiveDominant([5, 99, 832, -3, -4]));    // Output: true
console.log(isPositiveDominant([5, 0]));                    // Output: true
console.log(isPositiveDominant([0, -4, -1]));               // Output: false


------------------------------------------------------------------------------------------------------------------------------*/



/*Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
 {
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}






function getTotalPrice(groceries) {
    let total = 0;

    for (const grocery of groceries) {
        total += grocery.quantity * grocery.price;
    }

    return parseFloat(total.toFixed(2));
}

// Examples
console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 }]));  // Output: 1.5

console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]));  // Output: 4

console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.50 }]));  // Output: 4.5

console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]));  // Output: 10.4

console.log(getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]));  // Output: 0.3





*/