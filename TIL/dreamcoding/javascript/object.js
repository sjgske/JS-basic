// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object.

// object = { key : value };

// 1. Literals and properties
// object 만드는 법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax

const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}
// 파라미터 많아지면 너무 길어짐 ㅠ

// object: 매우 간편~
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// 이렇게 추가,삭제도 가능... but 유지보수 어려우니 ㄴㄴ
ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // computed properety

function printValue(obj, key) {
    console.log(obj[key]); // key라는 파라미터에 뭐가 들어갈지 모를 때!
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 20); // 호출할 때도 class처럼 new 사용!

// 4. Constructor function
function Person(name, age) { // 함수로 object 만들어 준다. 마치 class 같은 아이.
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); // false

// 6. for..in vs for..of (하나씩 꺼내서 출력하는거..그거..)

// for (key in obj) 이건 object에서!
for (key in ellie) {
    console.log(key);
}

// for (value of iterable) 이건 array에서! for let 어쩌구랑 같은거
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // { name: 'coder', age: '20' }

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object.assign 이용
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나오는 애가 앞에 애를 덮어씌움
console.log(mixed.color); // blue
console.log(mixed.size); // big