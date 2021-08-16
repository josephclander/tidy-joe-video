import "./main.scss";

const show = () => {
  overlay.classList.remove("hide");
};

const hide = () => {
  overlay.classList.add("hide");
};

const menu_btn = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");
menu_btn.addEventListener("click", show);
overlay.addEventListener("click", hide);
