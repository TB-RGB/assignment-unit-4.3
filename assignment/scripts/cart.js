console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
    basket.push(item);
    return true;
}

function listItems(array){
    for (let item of array)
    console.log('In basket:', item);
}

function empty(array){
    array.splice(0)
    return array;
}

console.log(`Basket is ${basket}`);
console.log('Adding tacos (expect true)', addItem('tacos'));
console.log(`Basket is ${basket}`);
console.log('Adding subs', addItem('subs'));
console.log('Adding wings', addItem('wings'));
console.log('Basket is:', basket);
console.log(empty(basket));
console.log('Basket is:', basket);













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
