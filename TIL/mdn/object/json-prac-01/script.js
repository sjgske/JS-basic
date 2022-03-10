const header = document.querySelector('header');
const section = document.querySelector('section');

// JSON 가져오기
// XMLHttpRequest api 이용

// 1. JSON의 URL 가져오기
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// 2. XMLHttpRequest 생성자로부터 새로운 request 인스턴스 생성
const request = new XMLHttpRequest();

// 3. 새로운 요청 만들기 -> open() 메서드 이용
// 최소 2개의 매개변수 가진다. (HTTP메서드, URL)
request.open('GET', requestURL);

// 4. responseType을 JSON으로 설정, 요청 보내기 -> send 메서드
request.responseType = 'json';
request.send();

// 5. 서버의 응답을 기다리고 처리
request.onload = function () { // onload: 응답이 성공적으로 돌아왔을 때 작동하는 콜백함수 
  // Do something with the retrieved data ( found in response )
  const superHeroes = request.response; // 요청에 대한 응답을 변수에 저장 -> response 프로퍼티
  populateHeader(superHeroes); // 함수1) header 조작
  showHeroes(superHeroes); // 함수2) section 조작
}

// Header 조작하기
function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${jsonObj['homeTown']} // Formed: ${jsonObj['formed']}`;
  header.appendChild(myPara);
}

// Section 조작하기 - 히어로 정보 카드 만들기
function showHeroes(jsonObj) {
  const heroes = jsonObj['members'];

  heroes.forEach(hero => {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers: ';

    const superPowers = hero.powers;

    superPowers.forEach(superpower => {
      const listItem = document.createElement('li');
      listItem.textContent = superpower;
      myList.appendChild(listItem);
    })

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  })
}