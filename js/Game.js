class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
   * @returns {array} an array of two new player objects
   */
  createPlayers() {
    return [new Player("Player 1", 1, "yellow", true), new Player("Player 2", 2, "red")];
  }

  get activePlayer() {
    return this.players.find(player => player.active);
  }

  /**
   * Gets game ready for play
   */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  /**
   * Listen for keyboard events
   */
  handleKeyDown(e) {
    if (this.ready) {
      if (e.key === "ArrowLeft") {
        this.activePlayer.activeToken.moveLeft();
      } else if (e.key === "ArrowRight") {
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (e.key === "ArrowDown") {
        console.log(e.key);
      }
    }
  }
}
