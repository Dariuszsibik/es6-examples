// rest parameters
function getValues(...Args) {
    var values = Args.sort(function(a, b){return a-b})
    var strings = Args.sort();
    return Args[1] === Number? `ilość elementów: ${Args.length}, elementy po sortowaniu: ${values}` : `ilość elementów: ${Args.length}, elementy po sortowaniu: ${strings}`
}

console.log(getValues(30, 15, 5, 10, 1))
console.log(getValues('Dariusz', "Mariusz", "Daria", "Monika", "Agnieszka", "Stanisław"))

// spread
function sumValues(a, b, c) {
    return a + b +c;
}

var values = [3, 2, 7];
var sum = sumValues.apply(null, values)
console.log(`wyświetlanie sumy elementów tablicy apply: ${sum}`);
console.log(`przekazanie tablicy poprzez spread: ${sumValues(...values)}`);

var array1 = [10, 20, 30];
var array2 = [40, 50, 60];
array1.push(...array2)
console.log(`przekazanie tablicy do innej tablicy poprzez spread: ${array1}`)

// Destructuring i parametry

// function setOptions(options) {
//     const env = options.env;
//     const db = options.db;
//     return [env, db];
// }

function setOptions({env = 'DEV', db}) {
    return [env, db]
}
console.log(setOptions({db: 'SQLite'}));