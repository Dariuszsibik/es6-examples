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

console.log('------- parseInt() ---------')
console.log(parseInt(1.2))
console.log(parseInt('1', 1))
console.log(parseInt('1'))
console.log(parseInt('a'))
console.log(parseInt('a', 1))
console.log(parseInt('0xf'))

console.log('------- toFixed() ---------')
var numObj = 12345.6789;
console.log(numObj.toFixed()  );   // Returns '12346': note rounding, no fractional part
console.log(numObj.toFixed(1)  );  // Returns '12345.7': note rounding
console.log(numObj.toFixed(6)  );  // Returns '12345.678900': note added zeros
console.log((1.23e+20).toFixed(2)); // Returns '123000000000000000000.00'
console.log((1.23e-10).toFixed(2)); // Returns '0.00'
console.log(2.34.toFixed(1)     ); // Returns '2.3'
console.log(2.35.toFixed(1)    );  // Returns '2.4'. Note it rounds up
console.log(2.55.toFixed(1)   );   // Returns '2.5'. Note it rounds down - see warning above
console.log(-2.34.toFixed(1)  );   // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
console.log((-2.34).toFixed(1) );  // Returns '-2.3' (...unless you use parentheses)

console.log('------- toPrecision() ---------')
var numObj = 5.123456;

console.log(numObj.toPrecision());    // logs '5.123456'
console.log(numObj.toPrecision(5));   // logs '5.1235'
console.log(numObj.toPrecision(2));   // logs '5.1'
console.log(numObj.toPrecision(1));   // logs '5'

numObj = 0.000123

console.log(numObj.toPrecision());    // logs '0.000123'
console.log(numObj.toPrecision(5));   // logs '0.00012300'
console.log(numObj.toPrecision(2));   // logs '0.00012'
console.log(numObj.toPrecision(1));   // logs '0.0001'


console.log('------- toSource() ---------')
console.log(numObj.toSource())  // new Number(0.000123)
console.log(Object.toSource()) // function object [native code]
console.log(Number.toSource()) // function Number [native code]

console.log('------- toString() ---------')
console.log((6).toString(2));       // displays '110'
console.log((254).toString(16));  // displays 'fe'

console.log((-10).toString(2));   // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'

console.log('------- valueOf() ---------')
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
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
