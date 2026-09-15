const treasure = document.getElementById("treasure");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

let score = 0;
let timeLeft = 20;

moveTreasure();

treasure.addEventListener("click", () => {
    score++;
    scoreText.textContent = score;
    moveTreasure();
});

function moveTreasure() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    treasure.style.left = x + "px";
    treasure.style.top = y + "px";
}

const timer = setInterval(() => {
    timeLeft--;
    timeText.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        treasure.style.display = "none";

        alert(`Tiden är slut! Du fick ${score} poäng.`);
    }
}, 1000);