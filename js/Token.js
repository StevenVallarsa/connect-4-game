class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  /**
   * Draw HTML Token
   */
  drawHTMLToken() {
    const div = document.createElement("div");
    document.getElementById("game-board-underlay").appendChild(div);
    div.setAttribute("id", this.id);
    div.setAttribute("class", "token");
    div.style.backgroundColor = this.owner.color;
  }

  // get htmlToken() {
  //   return this.drawHTMLToken();
  // }
}
