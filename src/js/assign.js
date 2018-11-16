const obj = {
    name: 'Tomek',
    age: 40
}

const objClone = Object.assign(obj, {id: 56});
console.log(objClone);
console.log(`metoda assign umożliwia skopiowanie właściwości z obiektu oryginalnego, ale również łączy z nowymi właściwościami obiektu`)


