// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.item-list');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.img}" alt="${item.type}" class="item__thumbnail">
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
  `;
}

// Handle button click
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector('.header-logo img');
  const buttons = document.querySelector('.menu-group');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then(items => {
    displayItems(items)
    setEventListeners(items)
  })
  .catch(console.log)