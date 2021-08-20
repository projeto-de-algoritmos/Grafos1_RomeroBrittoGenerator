export default class Node {
  constructor(row, col) {
    // Position vars
    this.row = row;
    this.col = col;
    this.id = `row${row}-col${col}`;

    // Painting board vars
    this.color = "white";
    this.isVisited = false;

    // Neighbors
    this.neighbors = [];
  }

  getVisit() {
    return this.isVisited;
  }

  visitNode() {
    this.isVisited = true;
  }

  setColor(color) {
    if (color === "white" || color === "#fff") {
      this.isVisited = false;
      const pixel = document.getElementById(this.id);
      pixel.style.backgroundColor = color;
      return false;
    }

    if (this.isVisited === false) {
      this.color = color;
      this.visitNode();

      try {
        const pixel = document.getElementById(this.id);
        pixel.style.backgroundColor = color;
      } catch {
        console.log(`Failed to paint pixel ${this.id}`);
        return false;
      }

      return true;
    }

    console.log(`Pixel ${this.id} is already selected.`);
    return false;
  }
  getColor() {
    return this.color;
  }

  setNeighbors(value) {
    this.neighbors.push(value);
  }
  getNeighbors() {
    return this.neighbors;
  }

  cleanPixel() {
    this.isVisited = false;
    this.setColor("#fff");
  }
}
