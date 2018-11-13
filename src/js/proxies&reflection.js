let x = {};
let handler = {};
let p = new Proxy(x, handler);
p.id = 345;
console.log(`Proxy to pośrednik który może wykonywać operacje w imieniu obiektu. p.id ma ustawioną wartość: ${p.id}, a x jest pustym obiektem: ${x.id}`)



let x2 = {};
let handler2 = {
    get: function(obj, key) {
        return `Wartość klucza ${obj[key]}`;
    }
}

let p2 = new Proxy(x2, handler2);
p2.id = 345;
p2.title = 'Dariusz Sibik'
console.log(`kiedy drugi parametr proxy ma ustawioną metodę get() to wartość id proxy jest zwracana przez tą metodę: ${p2.id} ${p2.title}`);



// //reflection
let color = {
    name: 'blue',
    hex: '#0000FF'
}
Reflect.deleteProperty(color, 'hex');
console.log(`dynamiczne druga właściwośc została skasowana przez obiekt Reflect, właściwość: ${color}`);

let prop = Reflect.defineProperty(color, 'class', {value: 'basic'});   // zwraca true / false
let prop2 = Object.defineProperty(color, 'class', {value: 'basic'});   // zwraca nową wartość
console.log(`różnica między Reflect.defineProperty a Object.defineProperty: Reflect:${prop} Object:${prop2}`);
