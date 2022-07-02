const game = new Game();

const start = document.getElementById("begin-game");
start.addEventListener("click", () => {
  game.startGame();
  start.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

document.addEventListener("keydown", e => {
  game.handleKeyDown(e);
});
