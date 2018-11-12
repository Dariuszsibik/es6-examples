// dzięki generatorom możemy tworzyć asychroniczne wywołania
function *gen() {
    yield "Raz";
    yield "Dwa";
    yield "Trzy";
}
let x = gen();
console.log(`generatory to funkcja którą recznie możemy sterować, w definicji funkcji przed nazwą musi być gwiazdka wartość 1 generatora: ${x.next().value} wartość 2 generatora: ${x.next().value}`);



function *cities() {
    yield "Warszawa";
    yield "Kraków";
    yield "Wrocław";
}
let places = cities();
// for (let city of places) {
//     console.log(city);
// }
console.log(`generatory mogą być przetwarzane jako kolekcje poprzez for (in, of)`)



// obiekt Map
let m = new WeakMap();
let obj1 = {id: 1}
let obj2 = {id: 2}
let obj3 = {id: 3}
m.set(obj1, 'React');
m.set(obj2, 'Angular');
m.set(obj3, 'Ember');
console.log(m)
console.log(`weakMap stosujemy aby uniknąć wycieków pamięci - mapa ze słabymi referencjami. Kluczem musi być obiekt ${m}`)
console.log(`garbage collection - kasowanie zbędnych elementów w pamięci. `);
console.log(`w weakMap nie możemy użyć size(), oraz iteracji for (in, of)`);



let s = new WeakSet();
let o1 = {name: 'Header'};
let o2 = {name: 'Footer'};
let o3 = {name: 'Main'};
s.add(o1).add(o2).add(o3);
console.log(s)
console.log(`obiekt Set używa luźny zbiór wartości (liczby, obiekty, string), weakSet używa tylko obiektów. `)
console.log(`WeakSet to zbiór unikalnych wartośći nie można używać size() i iteracji for(in, of)`);
console.log(`WeakSet metody: add(), delete(), has()`)