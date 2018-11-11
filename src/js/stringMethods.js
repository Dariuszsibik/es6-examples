const string = "ES2015";
console.log(`Metoda includes() zwraca true/false, czy ${string} zawiera 2015? ${string.includes("2015")}`);
console.log(`Metoda endsWith() zwraca true/false, czy ${string} kończy się 2015? ${string.endsWith('2015')}`);
console.log(`Metoda startWith() zwraca true/false, czy ${string} zaczyna się ES? ${string.startsWith('ES')}`);
console.log(`Metody sprawdzają też znaki na określonej pozycji czy ${string} na pozycji 1 ma S? ${string.startsWith('S', 1)}`);
console.log(`Metoda repeat() powtarza określoną liczbę razy dany string, ${string} x 10 ${string.repeat(10)}`);

let giftCard = {
    pierwsza: {
        id: 'ds001',
        name: 'Karta podarunkowa',
        price: 30,
        class: 'gift'
    },
    druga: {
        id: 'ds002',
        name: 'Bon rabatowy',
        price: 50,
        class: 'gift2'
    }
}

function createMarkup(product) {
    return `
	<div class="product ${product.class}">
		<h2>${product.name}</h2>
		<span class="id">${product.id}</span>
		<span class="price">${product.price}</span>
	</div>
	`
}

window.onload = function () {
    var content = document.querySelector(".content");
    pierwszy = content.innerHTML =
        createMarkup(giftCard.pierwsza)
    +   createMarkup(giftCard.druga)
}
