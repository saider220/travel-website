const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const hamburgerNavbar = document.querySelector(".hamburger-navbar");

let status = false;

function toggleNavbar() {
  if (status === false) {
    hamburgerNavbar.style.opacity = "100";
    status = true;
  } else {
    hamburgerNavbar.style.opacity = "0";
    status = false;
  };
}

hamburgerIcon.addEventListener("click", toggleNavbar);
closeIcon.addEventListener("click", toggleNavbar);