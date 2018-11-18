console.log("-------Array.from()--------")
console.log(Array.from('foo')); // expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); // expected output: Array [2, 4, 6]

console.log("-------Array.of()--------")
console.log(Array.of('foo')); // [foo]
console.log(Array.of(undefined)); // [undefined]

console.log("-------every()--------");
console.log([12, 5, 8, 130, 44].every(x => x >= 10)); // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); // true

console.log("-------filter()-------")
console.log([1, '2', NaN, undefined, false, 3].filter((el) => el !== undefined && typeof(el) === 'number' && !isNaN(el)))

console.log("-------find()-------")
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
console.log(inventory.find( fruit => fruit.name === 'cherries' ));

console.log("-------some()-------")
const inventory2 = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
console.log(inventory2.some((el, i) => el.name === 'apples'));

console.log("-------reduce()-------")
const numbers = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
console.log(numbers.reduce((a, v) => a =+ v.quantity));

console.log("-------Array.entries()--------")
var array1 = ['a', 'b', 'c'];
var iterator1 = array1.entries();
console.log(iterator1.next().value); // expected output: Array [0, "a"]
console.log(iterator1.next().value); // expected output: Array [1, "b"]

console.log("-------Array.keys()--------")
var iterator2 = array1.keys();
console.log(iterator2.next().value); //  0
console.log(iterator2.next().value); //  1

console.log("-------Array.copyWithin()--------")
console.log([1, 2, 3, 4, 5].copyWithin()) // 1, 2, 3, 4, 5
console.log([1, 2, 3, 4, 5].copyWithin(0)) // 1, 2, 3, 4, 5
console.log([1, 2, 3, 4, 5].copyWithin(1)) // 1, 1, 2, 3, 4
console.log([1, 2, 3, 4, 5].copyWithin(2)) // 1, 2, 1, 2, 3
console.log([1, 2, 3, 4, 5].copyWithin(3)) // 1, 2, 3, 1, 2
console.log([1, 2, 3, 4, 5].copyWithin(4)) // 1, 2, 3, 4, 1

console.log("-------Array.fill()--------")
console.log([1, 2, 3, 4].fill()) // [undefined, undefined, undefined, undefined]
console.log([1, 2, 3, 4].fill(0)) // [0, 0, 0, 0]
console.log([1, 2, 3, 4].fill(1)) // [1, 1, 1, 1]
console.log([1, 2, 3, 4].fill(2)) // [2, 2, 2, 2]
console.log([1, 2, 3, 4].fill(3)) // [3, 3, 3, 3]
console.log([1, 2, 3, 4].fill(4)) // [4, 4, 4, 4]

console.log("-------Array.reverse()--------")
console.log([1, 2, 3, 4].reverse()) // [4, 3, 2, 1, 0]

console.log("-------Array.sort()--------")
console.log([3, 4, 21, 1, 52, 2].sort((a, b) => a-b)) // [1, 2, 3, 4, 21, 52]

console.log("-------Array.splice()--------")
var months = [1, 2, 3, 4, 5, 6];
months.splice(1, 0, 'Feb');
console.log(months); // [1, "Feb", 2, 3, 4, 5, 6]

console.log("-------Array.concat()--------")
console.log([1, 2, 3, 4, 5, 6].concat(['a', 'b', 'c', 'd'])); //  [1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'd']

console.log("-------Array.slice()--------")
console.log([1, 2, 3, 4, 5, 6].slice(undefined)); // cała tablica
console.log([1, 2, 3, 4, 5, 6].slice(null));  // cała tablica
console.log([1, 2, 3, 4, 5, 6].slice(1, 2)); // [2]

console.log("-------Array.toString()--------")
console.log(['Styczeń', 'Luty', 'Marzec', 'Kwiecień'].toString()) // "Styczeń,Luty,Marzec,Kwiecień"


