var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * (100) + 1);
 var itemObject = {itemName: item, itemPrice: price};
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  for(i = 0; i < cart.length; i++){
    if(cart.length === 0){
      return `Your shopping cart is empty`
    } else if(cart.length === 1) {
      return `In your cart, you have ${cart.item} at ${item.itemPrice}`
    } else if(cart.length === 2) {
      return `In your cart, you have ${cart.item} at ${item.itemPrice}`
    } else
  }

function total() {

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
