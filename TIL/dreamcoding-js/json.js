// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringify(obj)

// boolean을 JSON으로 변환
let json = JSON.stringify(true);
console.log(json);

// 배열을 JSON으로 변환
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// object를 JSON으로 변환해보자
const rabbit = { // object
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);  // jump 함수는 포함 X 
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); // [] 안에 원하는 property 넣으면 그것만 나옴
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { // key와 value를 받는 callback함수
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; // key가 name이면 value를 ellie로 설정하고 key가 name이 아니면 그대로 쓴다.
});
console.log(json);


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
}); 
console.log(obj);
rabbit.jump();
// obj.jump(); // jump 함수 포함되어 있지 않으므로 출력X

console.log(rabbit.birthDate.getDate());    
// console.log(obj.birthDate.getDate()); // string으로 변환되었기 때문에 출력X
