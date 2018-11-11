var arr = ['Dariusz', "Mariusz", "Aneta", "Gosia", "Edyta", "Anna", "Tomek"];
// for (let key in arr) {
//     console.log(key + ' ' + arr[key]);
// }
// for (let value of arr) {
//     console.log(value);
// }
console.log("for in wyświetla iterator, for of wyświetla wartość")
// for (const char of arr[0]) {
//     console.log(char)
// }
console.log("for off i for in przetwarzają też stringi")



let m = new Map();
m.set(1, "React");
m.set(2, "Angula");
m.set(3, "Ember");
m.set(4, "Babel");
m.set(5, "Vue");
// for (const v of m) {
//     console.log(v)
// }
console.log(`obiekt Map możemy iterować poprzez for of, size() pobiera ilość elementów ${m.size}`)
console.log(`w obiekcie Map metoda set ustawia nową wartość, get pobiera wartość, clear kasuje wszystkie elementy a delete kasuje 1 element: ${m.get(1)}`)
const r = m.get(1);



// obiekt Set - to zestaw wartość a każda powinna być unikalna
let set = new Set();
set.add(10);
set.add(20);
set.add('ok');
set.add(true);
// for (const v of set) {
//     console.log(v)
// }
console.log(`obiekt Set wyświetla tylko unikalne wartości, dodawać nową wartość można poprzez add(), has() sprawdza czy posiada wartość ${set.has(10)}`)



//nodelist
window.onload = function() {
    const el = document.getElementById("none")
    el.style.display ="block";
    const paragraphs = document.querySelectorAll("p");
    for (const p of paragraphs) {
        p.className = 'blue';
    }
}
console.log(`querySelectorAll wraca NodeList która można iterować for of i na każdym elemencie dokonać zmiany`)



function createIterator(array) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < array.length?
                {value: array[nextIndex++], done: false}:
                {done: true};
        }
    };
};
let users = createIterator(["Andrzej", "Piotr", "Marek", "Tomek"]);
console.log(`Iterator można stworzyć funkcją, next(to metoda która zwraca value(Wartość) i done(false - jeśli ostatni element)) ${users.next().value}`);