const btns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

function tabMenu(e, tabId) {
  let activeTab = document.getElementById(tabId);

  btns.forEach((el) => el.classList.remove("active"));
  contents.forEach((el) => el.classList.remove("active"));

  e.target.classList.add("active");
  activeTab.classList.add("active");
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    tabMenu(e, `tab-${i + 1}`);
  });
}