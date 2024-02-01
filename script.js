const noButton = document.querySelector("#no-btn");
function moveButton() {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Restrict the "No" button's movement within the bounds of the screen
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  // Apply the new position to the button
  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
}

// Get the "Yes" button element
const yesButton = document.getElementById("yes-btn");
const gif = document.getElementById("gif");

// Add a click event listener to create confetti
yesButton.addEventListener("click", () => {
  yesButton.style.display = "none";
  noButton.style.display = "none";
  gif.style.display = "none";

  const header = document.querySelector(".question-container");
  header.style.display = "none";

  let p = document.createElement("p");
  const newLocal = (p.innerText =
    "Congrats, it is the right choice 🎉🎉 AAAAAA THANK YOU !! Follow my twitter @daeevv 🥰🥰, i'll  make sure to follow you back in 3-5 business day 😉😉");
  p.style.fontSize = "2rem";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center";
  p.style.position = "absolute";
  p.style.top = "50%";
  p.style.left = "50%";
  p.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(p);
});
