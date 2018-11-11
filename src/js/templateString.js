let price = 199;
let currency = "PLN";
let label = 'Cena wynosi: ' + price + currency;
let label2 = `Cena wynosi: ${price}${currency}`
console.log(`przykład template string:\n${label}\n${label2}`);

let discount = 0.1;
console.log(`Przykład wykonania operacji wewnątrz template string:\nCena wynosi: ${price - price * discount}${currency}`);

let person = `Dariusz Sibik
ul. Testowa 32B
lok. 2.41
31-900
Kraków`;
console.log(`Wieloliniowy string:
${person}`);