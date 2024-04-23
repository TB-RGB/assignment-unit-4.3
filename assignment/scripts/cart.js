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
 * This loops through items in array and logs each value {*} array 
 */
function listItems(){
    for (let item of basket){
    console.log('In basket:', item);
    }
    return basket;
}

// function empty(array){
//     array.splice(0, array.length);
//     return array;
// }

/**
 * 
 * If the basket contains any amount of value, it will remove until empty;
 */

function empty(){
    while (basket.length > 0){
        basket.pop();
    }
    return basket;
}

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
console.log('After emptying, the basket is now:',empty(basket));
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
console.log('After emptying, the basket is now:',empty(basket));




















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
