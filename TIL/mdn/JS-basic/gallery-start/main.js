const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arr = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Looping through images */
arr.forEach(img => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${img}`);
  thumbBar.appendChild(newImage);
})

thumbBar.addEventListener('click', (e) => {
  displayedImage.src = e.target.src;
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    btn.innerText = 'Lighten';
    btn.classList.remove('dark');
  } else {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    btn.innerText = 'Darken';
    btn.classList.add('dark');
  }
})