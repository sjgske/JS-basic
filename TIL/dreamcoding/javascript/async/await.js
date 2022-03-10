// await: clear style of using promise!

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw 'error';
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// 병렬적으로 실행하기
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. Promise APIs
// Promise.all()
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// Promise.race()
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);