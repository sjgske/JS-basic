// promise: 비동기 처리에 사용되는 자바스크립트 객체
// - state: pending -> fulfilled, rejected

// 1. Producer
// 새로운 promise가 생성되면, executor(콜백함수)는 자동으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    reject(new Error('no network'));
  }, 2000);
});

// 2. Consumer
// then, catch, finally로 값을 받아올 수 있다.
promise
  .then((value) => {
    console.log(value);
    // promise가 잘 실행되면 resolve에서 전달된 value를 파라미터로 받아온다.
  })
  .catch(error => {
    console.log('error');
    // promise가 잘 실행되지 않았을 때 reject에서 전달된 에러를 처리
  })
  .finally(() => {
    console.log('finally');
    // 성공하든 실패하든 마지막에 호출된다.
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num)); // 5

// 4. Error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(getEgg)
  .catch(error => {
    return '🍗';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);