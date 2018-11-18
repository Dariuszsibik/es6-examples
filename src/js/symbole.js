let s = Symbol("Logowanie");
let s2 = Symbol("Logowanie");
console.log(s)
console.log(`w symbolach nie używamy słowa kluczowego new.`)
console.log(`Symboli nie można konwertować na string`)
console.log(`Symbole są unikalne porównanie: ${s === s2}`)



let person = {
    name: "Dariusz",
    age: 30,
    city: "Kraków",
}
let symbol = Symbol();
person[symbol] = '1321';
// for (let i in person) {
//     console.log(i);
// }
console.log(`jeśli obiekt posiada właściwość jako symbol, nie możemy go iterować, dostęp do właściwości symbol obiektu: ${person[symbol]}`)
console.log(`metoda getOwnPropertySymbols zwraca wszystkie symbole obiektu:`)
console.log(Object.getOwnPropertySymbols(person))

console.log(typeof symbol)