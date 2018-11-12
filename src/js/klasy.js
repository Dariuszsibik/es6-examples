// wewnętrzne klasy wciąż bazują na prototypach
class Article {}
const art = new Article(); //new Article() to konstruktor
console.log(`Klasa musi być zdefiniowana przed jej użyciem, hoisting nie działa w klasach`)
const Article2 = class ArticleClass {}
const art2 = new Article2(); // ArticleClass zwróci błąd



// konstruktor
class Klasa {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    getId() {
        return this.id;
    }
    static compareId(a, b) {
        const id1 = a.id;
        const id2 = b.id;
        return id1>id2? true : false;
    }
}
const klasa = new Klasa(234, 'Filtry w CSS3');
const klasa2 = new Klasa(123, 'Wprowadzenie do HTML5')
console.log(`w ramach jednej klasy można mieć tylko jeden konstruktor. Wyświetlanie właściwości klasy: ${klasa.id}, ${klasa.title}`);
console.log(`użycie metody klasowej: ${klasa.getId()}`);
console.log(`metody statyczne odwołują się nie do jednego obiektu, lecz do wszystkich obiektów danej klasy, definiuje się jej poprzez static ${Klasa.compareId(klasa, klasa2)}`)



class Podklasa extends Klasa {
    constructor(id, title, category) {
        super(id, title);
        this.category = category;
    }
}
const podklasa = new Podklasa(23, "podklasa1", "kategoria1");
console.log(`słowo extend rozszerza istniejącą klasę, w podklasie można korzystać z właściwości i metod klasy nadrzędnej. Słowo super() odnosi się do konstruktora klasy nadrzędnej  ${podklasa.getId()}`)