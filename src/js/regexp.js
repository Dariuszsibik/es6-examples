const string = 'ok ok ok ok';
const patternG = /ok/g;
const patternS = /ok/y;

console.log(`flaga g - global ustawia przeszukanie globalne i lastIndex przechodzi dalej `)
console.log(patternG.exec(string));
console.log(patternG.lastIndex);
console.log(patternG.exec(string));
console.log(patternG.lastIndex);
console.log(patternG.exec(string));
console.log(patternG.lastIndex);

console.log(`flaga y - sticky ustawia lastIndex i wyszukuje od początku, nie przechodzi dalej `)
console.log(patternS.exec(string));
console.log(patternS.lastIndex);
console.log(patternS.exec(string));
console.log(patternS.lastIndex);
console.log(patternS.exec(string));
console.log(patternS.lastIndex);