// Promise umożliwia programowanie asynchroniczne w synchronicznym stylu
let x = 1;
let p = new Promise(function (resolve, reject) {
    x == 1 ? resolve("OK!") : reject(Error('Błąd'));
});
p.then(function (result) {
    console.log(result)
}).catch(function (error) {
    console.log(error)
})



// Przykład Promise.all()
let p1 = new Promise((resolve, reject) => {
    // resolve('OK 1')
    reject("Błąd 1");
});
let p2 = new Promise((resolve, reject) => {
    resolve('OK 2')
});
let p3 = new Promise((resolve, reject) => {
    resolve('OK 3')
});
Promise.all([p1, p2, p3]).then(results => {
    console.log(results);
}).catch(error => {
    console.log(error + ' Ponieważ jeden obiekt Promise nie został spełniony');
});



// API Fetch
const image = document.querySelector('img');
fetch('callback.png')
    .then(function(response){
        return response.blob();
    }).then(function(blob){
        let imageURL = URL.createObjectURL(blob);
        image.src = imageURL;
    });