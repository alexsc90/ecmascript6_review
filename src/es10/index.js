// array.flat

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//array.flatMap

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]))

// string.trimStart / .trimEnd

let hello = '       hello world';

console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello World        ';
console.log(hello);
console.log(hello.trimEnd());

//async/await

try {

} catch {
    error
}

// Object.fromEntries

let entries = [['name', 'Alejandro'], ['age, 30']];
console.log(Object.fromEntries(entries));

// Objeto de tipo símbolo

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);