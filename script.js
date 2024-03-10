var timer = 10;
var score = 0;
var randomNumber;


function BubbleMaker() {
  var clutter = "";

  for (var i = 0; i < 100; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function HitVal() {
  randomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = randomNumber;
}

function ChangeTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else {
      clearInterval(timerInt);

      document.querySelector("#pbtm").innerHTML = `<h1>Game Over <br> Your Score is ${score}.</h1>`
    }
  }, 1000);

}

function IncreaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);

  if (clickedNumber === randomNumber) {
    IncreaseScore();
    HitVal();
    BubbleMaker();
  }
}
)

BubbleMaker();
HitVal();
ChangeTimer();