function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = pricePerDroid * quantity;
    if(totalPrice > customerCredits) {
        return ("Insufficient funds!");
    }
        else {
            return (`You ordered ${quantity} droids worth ${totalPrice} credits!`);
        }      
}    
console.log(makeTransaction (3, 2000, 10000));