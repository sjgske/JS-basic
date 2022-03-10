const logo = document.querySelector('.header-logo img');
const menu = document.querySelector('.menu-group');
const itemList = document.querySelector('.item-list');

class Items {
  constructor(img, color, type, gender, size) {
    this.img = img;
    this.color = color;
    this.type = type;
    this.gender = gender;
    this.size = size;
  }
}

const array = [
  new Items('img/blue_p.png', 'blue', 'pants', 'male', 'small'),
  new Items('img/blue_p.png', 'blue', 'pants', 'male', 'small'),
  new Items('img/blue_s.png', 'blue', 'skirt', 'female', 'medium'),
  new Items('img/blue_s.png', 'blue', 'skirt', 'female', 'medium'),
  new Items('img/blue_t.png', 'blue', 'tshirt', 'male', 'large'),
  new Items('img/blue_t.png', 'blue', 'tshirt', 'male', 'large'),
  new Items('img/pink_p.png', 'pink', 'pants', 'male', 'large'),
  new Items('img/pink_p.png', 'pink', 'pants', 'male', 'large'),
  new Items('img/pink_s.png', 'pink', 'skirt', 'female', 'medium'),
  new Items('img/pink_s.png', 'pink', 'skirt', 'female', 'medium'),
  new Items('img/pink_t.png', 'pink', 'tshirt', 'female', 'small'),
  new Items('img/pink_t.png', 'pink', 'tshirt', 'female', 'small'),
  new Items('img/yellow_p.png', 'yellow', 'pants', 'male', 'small'),
  new Items('img/yellow_p.png', 'yellow', 'pants', 'male', 'small'),
  new Items('img/yellow_s.png', 'yellow', 'skirt', 'female', 'medium'),
  new Items('img/yellow_s.png', 'yellow', 'skirt', 'female', 'medium'),
  new Items('img/yellow_t.png', 'yellow', 'tshirt', 'male', 'large'),
  new Items('img/yellow_t.png', 'yellow', 'tshirt', 'male', 'large')
];


function showItem(arr) {
  arr.forEach((elem) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');

    img.src = elem.img;
    span.textContent = `${elem.gender}, ${elem.size}`;

    itemList.appendChild(li);
    li.appendChild(img);
    li.appendChild(span);
  })
}

window.onload = showItem(array);
logo.addEventListener('click', showItem(array));

menu.addEventListener('click', e => {
  const newArr = array.filter(elem =>
    elem.type === e.target.id || elem.color === e.target.id);
  itemList.innerHTML = '';
  showItem(newArr);
});