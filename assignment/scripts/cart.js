console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item){
    if (isFull() === false){
        basket.push(item);
        return true;
    } else if (isFull() === true){
        console.log('The basket is full!');
        return false;
    }
}
/**
 * 
 * This loops through items in basket and logs each value to a new line
 * @returns basket as an array for logging
 */
function listItems(){
    for (let item of basket){
    console.log('In basket:', item);
    }
    return basket;
}

/**
 * 
 * This begins to splice at basket array index 0 and deletes values up to the length of the array
 * @returns basket after deletion(s) 
 */

function empty(){
    basket.splice(0, basket.length);
    return basket;
}


// function empty(){
//     while (basket.length > 0){
//         basket.pop();
//     }
//     return basket;
// }

function isFull(){
    if (basket.length < maxItems){
        return false;
    } else if (basket.length >= maxItems){
        return true;
    }
}

function removeItem(item){
    if (basket.indexOf(item) != -1){
        basket.splice(basket.indexOf(item),1);
        return item;
    } else {
        return null;
    }
}

console.log(`Basket is ${basket}`);
console.log('Adding tacos (expect true)', addItem('tacos'));
console.log(`Basket is ${basket}`);
console.log('Adding subs', addItem('subs'));
console.log('Adding wings', addItem('wings'));
console.log('Basket is:',listItems());
console.log('After emptying, the basket is now:', empty());
console.log('Adding wings', addItem('wings'));
console.log('Adding tacos', addItem('tacos'));
console.log('Is the basket full?', isFull());
console.log('Adding pizza', addItem('pizza'));
console.log('Adding burgers', addItem('burgers'));
console.log('Adding salad', addItem('salad'));
console.log('Basket is:',listItems());
console.log('Is the basket full?', isFull());
console.log('Adding coffee', addItem('coffee'));
console.log('Basket is:',listItems());
console.log('Removed item from basket is:', removeItem('pizza'));
console.log('Basket is:',listItems());
console.log('After emptying, the basket is now:', empty());




















// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
