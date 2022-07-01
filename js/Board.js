class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
   *
   * @returns {array} 2D array of spaces
   */
  createSpaces() {
    const spaces = [];
    for (let x = 0; x < this.columns; x++) {
      const column = [];
      for (let y = 0; y < this.rows; y++) {
        column.push(new Space(x, y));
      }
      spaces.push(column);
    }
    return spaces;
  }
}
