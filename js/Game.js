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

  /**
   * Gets game ready for play
   */
  startGame() {}
}
