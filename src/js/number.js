const n = 4.78;
const m = 4;
const s = 'Ok';
const t = '14.34';
const z = 23;
const b = 0b010;
const b2 = 0b101;
console.log(`n=${n}, m=${m} Number.isInteger(n)=${Number.isInteger(n)}, Number.isInteger(m)=${Number.isInteger(m)}`)
console.log(`n=${n}, s=${s},  metoda Number.isNaN() - n=${Number.isNaN(n)} - s*n=${Number.isNaN(s*n)}`)
console.log(`string: ${t}, Number.parseInt():${Number.parseInt(t)}`)
console.log(`Bezpieczny Integer - z:${z} Number.isSafeInteger(z)=${Number.isSafeInteger(z)}, null: ${Number.isSafeInteger(null)}`)
console.log(`Binarna reprezentacja liczby 0b010: ${b}, liczba 0b101: ${b2}`)