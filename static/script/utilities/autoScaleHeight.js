export function autoScaleHeight() {
  var highestHeight = 0;

  let scaleElement = document.querySelectorAll(".scale-height");

  scaleElement.forEach((element) => {
    let height = element.offsetHeight;

    if (highestHeight <= height) {
      highestHeight = height;
    }
  });

  scaleElement.forEach((element) => {
    element.style.height = highestHeight + "px";
  });
}
