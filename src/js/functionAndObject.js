console.log('-----apply()----------')
var arr = [1, 2, 3, 4, 5];
console.log(Math.max(arr))  // NaN
console.log(Math.max.apply(arr)) // -Infinity
console.log(Math.max.apply(null, arr)) // 5

console.log('-----bind()----------')
var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }

  var unboundGetX = module.getX;
  //console.log(unboundGetX()); // undefined
  var boundGetX = unboundGetX.bind(module);
  console.log(boundGetX()); // 42

  console.log('-----object.assign()----------')
  const obj = {
    name: 'Tomek',
    age: 40
}

const objClone = Object.assign(obj, {id: 56});
console.log(objClone);
console.log(`metoda assign umożliwia skopiowanie właściwości z obiektu oryginalnego, ale również łączy z nowymi właściwościami obiektu`)

console.log('-----object.fromEntries()----------')