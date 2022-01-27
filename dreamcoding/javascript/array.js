'use strict';

// Array (배열)

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
// 검색, 삽입, 삭제, 정렬
const fruits = ['🍊', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 🍊
console.log(fruits[fruits.length - 1]); // 🍌

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍒','🥥');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓','🍑');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are much slower than pop, push.
// splice: remove an item by index position
fruits.push('🍒','🍑','🍉');
console.log(fruits);
fruits.splice(1) // splice(몇번째, 몇개)
console.log(fruits); // 몇개 지정 안하면 지정한 데이터부터 끝까지 다 지운다.
fruits.splice(1, 1, '🍋'); // 지정한 데이터 뒤에 추가!
console.log(fruits);

// combine two arrays
const fruits2 = ['🥝','🥑'];
const newFruits = fruits.concat(fruits2); //fruits에 fruits2 합침
console.log(newFruits);

// 5. Searching
// indexOf: 몇번째에 있는지
console.log(fruits);
console.log(fruits.indexOf('🍊'));
console.log(fruits.indexOf('🥥')); // 없는 것 입력하면 -1 출력됨

// includes: 포함 O/X
console.log(fruits.includes('🥥'));

// lastIndexOf
fruits.push('🍊'); //똑같은 데이터 추가
console.log(fruits.indexOf('🍊')); // 앞에 있는것부터 return
console.log(fruits.lastindexOf('🍊')); // 뒤에 있는것부터 return
