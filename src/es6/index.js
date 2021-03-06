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
a = 'a'; // no va a permitir reasignar su valor...
console.log(a);

// Objetos

let name = 'Alejandro';
let age = 30;

obj = {name: name, age: age};

//es6

obj2 = { name, age };
console.log(obj2)

// Arrow Function (funciones anónimas)

const names = [
    {name: 'Alejandro', age: 30},
    {name: 'Yesica', age: 27}
]

let lisfOfNames = names.map(function (e) {
    console.log(e.name);
})

// es6

let lisfOfNames2 = names.map(e => console.log(e.name));

const listOfNames3 = (name, age, country) => {
    // ...
} 

const lisfOfNames4 = name => {
    // ...
}

const square = num => num * num 

// Promesas (asincronía)

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Ups!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola!'))
    .catch(error => console.log(error));

// Inheritance

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

// Import-export(module.js)

import { hello } from './module';
hello();

// Generators

function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);








