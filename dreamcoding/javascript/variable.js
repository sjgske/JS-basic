//1. Use strict
//add in ES5
// use this for Vanila Javascript.
'use strict';

//2. Variable, rw(read/write)
//let (added in ES6)
//global scope
let globalName = 'global name'

// block scope
{
    let name = 'ellie';
    console.log(name)
    console.log(globalName)
}
console.log(globalName)
console.log(name)

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no block scope
console.log(age);
age = 4;
var age;

//3, Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

//4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
//가장 작은 단위
// object, box container
// function, first-class function (function도 변수에 저장할 수 있다)

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`)
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}}`)
console.log('value: ' + helloBob + 'type: ' + typeof helloBob)

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null (값이 정해짐)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined (값이 정해지지 않음)
let x = undefined;
let y;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique indetifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // tru

//object, real-life object, data structure
const ellie = { name:'ellie', age:20 };
ellie.age = 21; //변경 가능

//5. Dynamic typing: dynamically typed language
// 변수에 저장하는 값에 따라 타입이 변경될 수 있음
let text = 'hello'
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1
console.log(`value: ${test}, type: ${typeof test}`);
text = '7' + 5;
console.log(`value: ${test}, type: ${typeof test}`);
text = '8' / '2';
console.log(`value: ${test}, type: ${typeof test}`); //number
console.log(text.charAt(0)); //error