export function scrollingNavActive() {
  window.addEventListener("scroll", navActive);
}

function navActive() {
  let section = document.querySelectorAll("section");
  let nav = document.querySelectorAll(".list-item");

  section.forEach((element) => {
    let top = window.scrollY;
    let offset = element.offsetTop - 20;
    let height = element.offsetHeight;
    let id = element.getAttribute("id");

    if (top >= offset && top < offset + height) {
      nav.forEach((element) => {
        element.classList.remove("active");
        document.querySelector(".list-item[href*=" + id + "]").classList.add("active");
      });
    }
  });

  if (window.scrollY <= section[0].offsetTop - 20) {
    nav.forEach((element) => {
      element.classList.remove("active");
    });
  }
}
