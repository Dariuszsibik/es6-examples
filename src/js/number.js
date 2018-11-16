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
console.log(`metoda toExponential() zwraca liczbę w postaci wykładniczej: ${z.toExponential()}`)
console.log(`metoda toFixed() liczbę stało przecinkową, zaaokrągla do góry albo do dołu: ${n.toFixed()}`)
console.log(`${b.toLocaleString()}`)
console.log(`${Number.EPSILON}`); // 2.220446049250313e-16
console.log(Number.constructor); // ƒ Function() { [native code] }
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY);  //Infinity
console.log(Number.prototype);
console.log("==============================")
console.log(Number.isInteger(0));         // true
console.log(Number.isInteger(1));         // true
console.log(Number.isInteger(-100000));   // true
console.log(Number.isInteger(99999999999999999999999)); // true
console.log(Number.isInteger(0.1));       // false
console.log(Number.isInteger(Math.PI));   // false
console.log(Number.isInteger(NaN));       // false
console.log(Number.isInteger(Infinity));  // false
console.log(Number.isInteger(-Infinity)); // false
console.log(Number.isInteger('10'));      // false
console.log(Number.isInteger(true));      // false
console.log(Number.isInteger(false));     // false
console.log(Number.isInteger([1]));       // false
console.log("==============================")
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true
console.log(Number.isNaN('NaN'));      // false
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN('blabla'));   // false
console.log(Number.isNaN(true));
console.log(Number.isNaN(null));
console.log(Number.isNaN(37));
console.log(Number.isNaN('37'));
console.log(Number.isNaN('37.37'));
console.log(Number.isNaN(''));
console.log(Number.isNaN(' '));
console.log("==============================")
console.log(0/0)