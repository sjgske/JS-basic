export function setIsLoading(state) {
  const spinner = document.querySelector(".spinner");
  if (!state) {
    spinner.style.display = "none";
  }
}
