const m = 2.4523;
console.log(`metoda Math.trunc() obcina miejsca po przecinku m: ${m} Math.trunc(m): ${Math.trunc(m)}`)

const sign = [0, 1021303, -120310230, 'OK'];
console.log(`Math.sign() zwraca cztery wartośći, tablica elementów: ${sign}`)
for ( let i of sign) {
    console.log(`element: ${i} Math.sign(element): ${Math.sign(i)}`)
}

const l = 100;
console.log(`logarytmy z liczby ${l}, logarytm Math.log10(): ${Math.log10(l)}, logarytm Math.log2(): ${Math.log2(l)}`)