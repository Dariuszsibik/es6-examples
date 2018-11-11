//export const Variables = () => {

    function showOrderValue() {
        var orderValue = 100;
        if (orderValue >= 100) {
            let newOrderValue = orderValue - orderValue * 0.1;
        }
        return "let jest tylko w ramach bloku" // newOrderValue
    }
    console.log(showOrderValue());

    let score = 10;
    let x = 1;
    if (x == 1) {
        let score = 20;
    }
    console.log("nie można drugi raz zadeklarować let w tym samym zakresie")
    // let score = 20;

    const env = 'DEV';
    console.log("Nie można zmieniać wartości już raz zadeklarowanej zmiennej cons") // env = "PROD";
    console.log("Nie można deklarować drugi raz tej samej zmiennej const") // const env = "PROD";
    {
        console.log("Można zadeklarować tą samą nazwę zmiennej const w innym zakresie");
        const env = "PROD";
    }

    const config = {};
    config.env = "PROD";
    console.log(config);
    console.log("Jeśli obiekt jest przypisany do const, obiektu zmienić nie możemy, ale możemy zmienić jego właściwości");

    showVariable();

    function showVariable() {
        console.log(y);
        console.log(" Przyład hoisting, wyświetlanie zmiennej przed jej przypisaniem wartośći, w przypadku funkcji nie wyświetla błędu")
        var y = 2;
    }

//}
