class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
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

  /**
   * Draw board
   */
  drawHTMLBoard() {
    for (let i = 0; i < this.spaces.length; i++) {
      for (let j = 0; j < this.spaces[0].length; j++) {
        this.spaces[i][j].drawSVGSpace();
      }
    }
  }

  //for (let column of this.spaces) {
  //  for (let space of column) {
  //    space.drawSVGSpace();
  //  }
  //}
}
