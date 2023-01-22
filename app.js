let nav = document.querySelector("nav");
let open = document.querySelector(".open");
let close = document.querySelector(".close");
open.addEventListener("click", () => {
  nav.classList.add("active");
});
close.addEventListener("click", () => {
  nav.classList.remove("active");
});
