## Tab Button

###  `tabMenu` 함수
  
  - `event`, `tabId` (contents의 id) 인자를 갖는다.
  - 버튼을 클릭하면 해당 버튼과 contents가 활성화된다. (`"active"` 클래스 추가)
  - 나머지 버튼과 contents는 활성화 해제된다.

### 버튼에 이벤트 바인딩
  
  - 각 버튼에 `tabId`를 할당하기 위해 `for 문` 사용
  - `addEventListener`에 인자가 있는 콜백함수를 넘길 때는 **화살표 함수** 사용!
  - 특히 event 객체를 인자로 받을 때는 화살표 함수 인자에 e 넣어주기📌📌