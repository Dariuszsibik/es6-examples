console.log("-------includes()--------")
var str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be'));       // true
console.log(str.includes('To be', 0));    // false
console.log(str.includes('TO BE'));       // false

console.log("-------includes()--------")
var str = 'to jest testowy string';
console.log(str.split(" "));

console.log("-------slice()--------")
var str = 'The quick red fox jumped over the lazy dog\'s back.';
console.log(str.slice(30)); // the lazy dogs back
console.log(str.slice(4, 17)); //quick red fox
console.log(str.slice(-5)); // back.

console.log("-------search()--------")
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, to jest indeks pierwszej dużej litery J
console.log(str.search(re2)); // returns -1 nie znalazło .

console.log("-------repeat()--------")
//'abc'.repeat(-1);   // RangeError
console.log('abc'.repeat(0))  // ''
console.log('abc'.repeat(1))  // 'abc'
console.log('abc'.repeat(2))  // 'abcabc'
console.log('abc'.repeat(3.5))  // 'abcabcabc' (konwertuje do Integer)
//'abc'.repeat(1/0);  // RangeError

console.log("-------replace()--------")
var p = 'test replace() metoda test zwraca nowy string test?';
var regex = /test/gi;
console.log(p.replace(regex, 'Dariusz')); // Dariusz replace() metoda Dariusz zwraca nowy string Dariusz?

console.log("-------indexOf()--------")
console.log('Dariusz Sibik'.indexOf('Dariusz')   ) // returns  0
console.log('Dariusz Sibik'.indexOf('Sibika')  ) // returns -1
console.log('Dariusz Sibik'.indexOf('Sibik', 0)) // returns 8
console.log('Dariusz Sibik'.indexOf('Sibik', 5)) // returns 8

console.log("-------substring()--------")
console.log("test metody substring".substring(1, 3)); // es
console.log("test metody substring".substring(2));  // st metod substring

console.log("-------match()--------")
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
console.log(str.match(regexp)); // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
