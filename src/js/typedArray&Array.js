const typedArr = new Uint8Array([1, 2, 3, 4, 5, 'test', 30000, 3.123, -1]);
console.log(`Tworzymy nowy obiekt Uint8Array czyli tablicę określonego typu i z danego zakresu: ${typedArr} length: ${typedArr.length}`)

const floatArray = new Float64Array([1, 2, 3, 30000, 3.1234, 1223333.22223])
console.log(floatArray)


// Array.From()
const arr = 'Header';
console.log(`string: ${arr}, Array.from(string)=${Array.from(arr)}`);

const arr2 = [1, 2, 3];
console.log(`Array.from może też wykonywać operację na każdym elemencie tablicy: Array.from(arr2, x => x*4), wynik: ${Array.from(arr2, x => x*4)}`);

// Array.of()
const off = Array.of(10);
const array = Array(10);
console.log(`Array.of(10) tworzy tablicę z jedną wartością: ${off} Array(i) tworzy tablicę i-elementową z wartościami undefinded: ${array}`);

const find = [1, 2, 3, 4, 5];
console.log(`find zwraca pierwszą wartość w tablicy który spełnia callback Array.find(callback) ${find.find( x => x > 3)}`);