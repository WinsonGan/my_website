import { movingObject } from "./utilities/movingObject.js";
import { automateTyping } from "./utilities/automateTyping.js";
// import { downloadFile } from "./utilities/downloadFile.js";
import { autoScaleHeight } from "./utilities/autoScaleHeight.js";
import { popUpDetail } from "./utilities/popUpDetail.js";
import { scrollingReveal } from "./utilities/scrollingReveal.js";
import { scrollingNavActive } from "./utilities/scrollingNavActive.js";

var phone_screen = window.matchMedia("(max-width: 420px)");

window.onload = function () {
  if (!phone_screen.matches) {
    movingObject();
  }
  automateTyping();
  // downloadFile();
  autoScaleHeight();
  popUpDetail();
  scrollingReveal();
  scrollingNavActive();
};
