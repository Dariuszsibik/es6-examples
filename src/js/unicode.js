const myString = '\u0040\u260E\u2764';

for (const c in myString) {
    console.log(`element numer: ${c} wartość: ${myString[c]}`);
}

console.log(`ilość elementów unicode: ${myString.length}`)