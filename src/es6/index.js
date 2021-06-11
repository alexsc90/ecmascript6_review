// Valores por defecto

function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6

function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO')

// Template literals

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

//es6

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// Multilínea
 
let lorem = 'lorem ipsum \n' + 'otra frase épica que necesitamos.'

//es6

let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica`;

console.log(lorem);
console.log(lorem2)

//Destructuración de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age)

// es6

let { name, age, country } = person;
console.log(name, age, country);

// Spread operator

let team1 = ['Oscar', 'Julián', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]
console.log(education)

// let - var
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet)
}

console.log(globalVar);

// const 

const a = 'b';
a = 'a'; // no va a permitir reasinar su valor...
console.log(a);
