let answer = document.getElementById("answer");
let number = document.getElementById("number");
let submitElement = document.getElementById("submit");
let startElement = document.querySelector(".start");
let attemptElement = document.getElementById("attempt");
let tryAgain = document.getElementById("try");
let score = document.getElementById("score");

//answer.textContent = "tim"

let attempt = 3;
console.log(attempt);

let guess = Math.floor(Math.random() * 100 + 1);

submitElement.addEventListener("click", () => {
  if (!number.value) {
    startElement.textContent = "Please Insert A Number";
  } else if (number.value == guess) {
    startElement.innerHTML = `Correct Number <span class='material-symbols-outlined' style='font-size:20px;color:green;'>check_circle</span>`;
    answer.textContent = guess;
    if (parseInt(attemptElement.textContent) > parseInt(score.textContent)) {
      score.textContent = attemptElement.textContent;
    }
    tryAgain.style.display = "inline";
  } else if (number.value > 100) {
    startElement.textContent = "choose a number from 1-100";
  } else if (number.value < guess) {
    if (attempt > 1) {
      startElement.textContent = "Number Too Low";
      attempt--;
      attemptElement.textContent = attempt;
    } else {
      startElement.textContent = "you lost the game";
      attemptElement.textContent = 0;
      answer.textContent = guess;
      number.disabled = true;
      tryAgain.style.display = "inline";
    }
  } else if (number.value > guess) {
    if (attempt > 1) {
      startElement.textContent = "Number Too High";
      attempt--;
      attemptElement.textContent = attempt;
    } else {
      startElement.textContent = "you lost the game";
      attemptElement.textContent = 0;
      answer.textContent = guess;
      number.disabled = true;
      tryAgain.style.display = "inline";
    }
  }
});

tryAgain.addEventListener("click", () => {
  guess = Math.floor(Math.random() * 100 + 1);
  startElement.textContent = "start guessing...";
  answer.textContent = "?";
  attempt = 3;
  attemptElement.textContent = attempt;
  number.value = "";
  tryAgain.style.display = "none";
  number.disabled = false;
});
