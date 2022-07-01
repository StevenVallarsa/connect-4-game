class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /**
   *
   * @param   {number} tokenCount - number of token objects to be created
   * @returns {array}  an array of unique token objects
   */
  createTokens(tokenCount) {
    const tokens = [];
    for (let i = 0; i < tokenCount; i++) {
      tokens.push(new Token(index, this));
    }
    return tokens;
  }
}
