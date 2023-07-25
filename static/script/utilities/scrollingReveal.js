var elementVisible = 150;

export function scrollingReveal() {
  window.addEventListener("scroll", reveal);
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
