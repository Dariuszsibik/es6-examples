var numbers = [1, 2, 3, 4, 5];
var [a, b, c] = numbers;
console.log(`destrukturyzacja tablicy a: ${a} a: ${b} c: ${c}`);

var a = 1;
var b = 2;
[a, b] = [b, a];
console.log(`zamiana zmiennych a: ${a} b: ${b}`);

var person = {
    name: 'Dariusz',
    age: 30,
    city: "Kraków"
}

var {age: a, city: c, name:n} = person;
console.log(`wyświetlanie właściwośći obiektu o innych nazwach name: ${n}, age: ${a}, city: ${c}, w przypadku braku wyświetla undefined`);

var person = {}
var {age: a = 30, city: c = "Warszawa", name:n = "Mariusz"} = person;
console.log(`przypisanie wartości domyślnych: ${n}, age: ${a}, city: ${c}, w przypadku braku wyświetla undefined`);

function getNumbers() {
    return [1, 2, 3, 4, 5]
}
var [a, , ,c , e] = getNumbers();
console.log(`pomijanie wartości w tablicy ${a}, ${c}, ${e}`);

function multiplyValues(a = 2, b = 2 * a) {
    return a * b;
}

console.log(`wyświetlanie domyślnych parametrów w funkcji: ${multiplyValues(2)}`);