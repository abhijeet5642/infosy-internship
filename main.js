"use strict";   // 1. Activate Strict Mode

// 2. Function to add items to cart
function addToCart(cart, itemName, itemPrice) {
    // create item object
    const item = {
        name: itemName,
        price: itemPrice
    };

    // add item to cart array
    cart.push(item);

    // return updated cart
    return cart;
}

// 3. Create empty shopping cart
let shoppingCart = [];

// 4. Call addToCart function three times
shoppingCart = addToCart(shoppingCart, "Laptop", 50000);
shoppingCart = addToCart(shoppingCart, "Headphones", 2000);
shoppingCart = addToCart(shoppingCart, "Mouse", 800);

// 5. Log shopping cart
console.log("Shopping Cart:", shoppingCart);

// 6. Calculate total cost using for loop
let totalCost = 0;

for (let i = 0; i < shoppingCart.length; i++) {
    totalCost += shoppingCart[i].price;
}

console.log("Total Cost:", totalCost);




// bonus
  
function removeFromCart(cart, itemName) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === itemName) {
            cart.splice(i, 1);   // remove first matching item
            break;
        }
    }
    return cart;
}

// Example usage
shoppingCart = removeFromCart(shoppingCart, "Mouse");
console.log("Cart after removing Mouse:", shoppingCart);
