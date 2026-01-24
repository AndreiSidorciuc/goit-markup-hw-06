const openBtn = document.querySelector("[data-modal-open]");
const closeBtn = document.querySelector("[data-modal-close]");
const backdrop = document.querySelector(".backdrop");

openBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});
