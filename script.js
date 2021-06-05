const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  // use toggle method to apply/remove 'active' class to search class
  search.classList.toggle("active");
  // apply focus to input class, place cursor in search box.
  input.focus();
});
