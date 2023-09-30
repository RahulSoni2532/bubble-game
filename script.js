let runTimer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  let clutter = "";

  for (let i = 0; i <= 131; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function startTime() {
  var timerint = setInterval(function () {
    if (runTimer > 0) {
      runTimer--;
      document.querySelector("#timerval").textContent = runTimer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1/>`
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickednum = (Number(dets.target.textContent));
  if(clickednum === hitrn){
   increaseScore();
   makeBubble();
   getHit();
  }
});

startTime();
makeBubble();
getHit();
