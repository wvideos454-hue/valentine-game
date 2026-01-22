let score = 0;
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");
const surprise = document.getElementById("surprise");
const song = document.getElementById("loveSong");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * (gameArea.clientWidth - 40) + "px";
  heart.style.top = Math.random() * (gameArea.clientHeight - 40) + "px";

  heart.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    heart.remove();

    if (score === 5) {
      endGame();
    }
  };

  gameArea.appendChild(heart);
  setTimeout(() => heart.remove(), 1500);
}

function endGame() {
  gameArea.innerHTML = "";
  surprise.classList.remove("hidden");
  song.play();
  startFallingHearts();
}

setInterval(createHeart, 800);

function startFallingHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.querySelector(".falling-hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

function finalReveal() {
  document.querySelector(".game-container").style.display = "none";
  document.getElementById("final").classList.remove("hidden");
  heartExplosion();
}

function heartExplosion() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "explosion-heart";
    heart.innerHTML = "💖";

    heart.style.left = "50vw";
    heart.style.top = "50vh";
    heart.style.setProperty("--x", `${Math.random() * 400 - 200}px`);
    heart.style.setProperty("--y", `${Math.random() * 400 - 200}px`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}