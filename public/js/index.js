let icon = document.querySelector(".mobile-menu");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showMenu");
  if (ul.className === "showMenu") {
    document.getElementById("menu").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("menu").classList = "fa-solid fa-bars";
  }
});

