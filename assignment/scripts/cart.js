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

function listItems(array){
    for (let item of array)
    console.log('In basket:', item);
}

function empty(array){
    array.splice(0, array.length);
    return array;
}

function isFull(){
    if (basket.length < maxItems){
        return false;
    } else if (basket.length >= maxItems){
        return true;
    }
}

console.log(`Basket is ${basket}`);
console.log('Adding tacos (expect true)', addItem('tacos'));
console.log(`Basket is ${basket}`);
console.log('Adding subs', addItem('subs'));
console.log('Adding wings', addItem('wings'));
console.log('Basket is:', basket);
console.log('After emptying, the basket is now:',empty(basket));
console.log('Adding wings', addItem('wings'));
console.log('Adding tacos', addItem('tacos'));
console.log('Is the basket full?', isFull());
console.log('Adding pizza', addItem('pizza'));
console.log('Adding burgers', addItem('burgers'));
console.log('Adding salad', addItem('salad'));
console.log('Is the basket full?', isFull());
console.log('Adding coffee', addItem('coffee'));

















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
