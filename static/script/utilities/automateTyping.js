var texts = ["WINSON GAN", "GAN WEI GUANG"];
var count = 0;
var index = 0;
var currentText = "";
var letter = "";

export function automateTyping() {
  // Automation in typing text
  typeText();
}

function typeText() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(deleteText, 1000);
  } else {
    setTimeout(typeText, 150);
  }
}

function deleteText() {
  letter = currentText.slice(0, --index);

  document.getElementById("typing").textContent = letter;
  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(typeText, 150);
  } else {
    setTimeout(deleteText, 50);
  }
}
