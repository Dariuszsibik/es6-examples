var sumValues = function(a, b) {
    return a + b;
}
const multiplyValues = (a, b) => a + b;
console.log(sumValues(2, 3), multiplyValues(2, 3))



let array = [10, 20, 30, 40, 50];
console.log(`użycie reduce + arrow Function ${array.reduce((a, b) => a + b)}`);



function Counter() {
    this.count = 0;
    setTimeout(() => {
        this.count++
        console.log(`przekazanie this za pomocą arrow function: ${this.count}`)
    })
};
var c = new Counter();


let product = {
    id: 293,
    showId: () => this.id
}
console.log(`arrow function nie nadają się na metody w obiekcie: ${product.showId()}`);



let Klasa = () =>  ({ id: 12345 });
console.log(`zwrócenie obiektu przez arrow function ${Klasa()}`);