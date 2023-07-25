export function popUpDetail() {
  let popBlock = document.querySelectorAll(".pop-up-detail");

  popBlock.forEach((element) => {
    element.addEventListener("click", (e) => {
      let projectDetail = element.nextElementSibling;
      projectDetail.classList.add("show");
      closeDetail(projectDetail);
    });
  });
}

function closeDetail(projectDetail) {
  let closeDetail = projectDetail.querySelector("#close-detail");

  closeDetail.addEventListener("click", (e) => {
    projectDetail.classList.remove("show");
  });
}
