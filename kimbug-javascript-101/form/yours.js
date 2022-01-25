const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');

toggleButton.addEventListener('click', function () {
  menu.classList.toggle('show');
});

toggleButton.addEventListener('blur', function () {
  menu.classList.remove('show');
})

menu.addEventListener('click', function (e) {
  const branchName = e.target.textContent.trim();
  toggleButton.textContent = branchName;
  toggleButton.classList.add('selected');

  nextButton.removeAttribute('disabled');
})