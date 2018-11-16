async function wait3seconds(string) {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(string);
        }, 3000);
    });
}

async function run() {
    let result = await wait3seconds("Content");
    return result;
}

run().then(res => {
    console.log(res);
});

console.log(`funkcja run() za pomocą await wykorzystuje funkcję wait3seconds i czeka na odpowiedź która jest obiektem Promise`)

