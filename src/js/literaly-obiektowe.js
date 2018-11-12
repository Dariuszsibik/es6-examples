function getPerson(name, age) {
    return {
        name,
        age,
        checkAge(){
            return this.age >18? true : false;
        },
        ['user' + name + age]: 'OK'
    };
};
let p = getPerson("Dariusz", 29);
console.log(`łatwe stworzenie łaściwości w obiekcie bez słowa this: ${p}`);
console.log(`łatwe stworzenie metody w obiekcie bez this i function: ${p.checkAge()}`);
console.log(`dynamiczne tworzenie właściwośći w obiekcie: ${p.userDariusz29}`)