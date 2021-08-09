export default class Node {
    constructor(row, col) {
        // Position vars
        this.row = row;
        this.col = col;
        this.id = `row${row}-col${col}`
        
        // Painting board vars
        this.color = "white";
        this.wall = false;
        this.isVisited = false;

        // Neighbors
        this.neighbors = []
    }
    
    setColor(color){
        if (this.wall === false && this.isVisited === false) {
            this.color = color;

            try {
                const pixel = document.getElementById(this.id);
                pixel.style.backgroundColor = color;
            } catch {
                console.log(`Failed to paint pixel ${this.id}`);
                return false;
            }

            return true;
        }
        
        console.log(`Pixel ${this.id} either is a wall or is already selected.`);
        return false;
    }
    getColor() {
        return this.color;
    }

    setNeighbors(value){
        this.neighbors.push(value);
    }
    getNeighbors(){
        return this.neighbors;
    }

    cleanPixel() {
        this.wall = false;
        this.isVisited = false;
        this.setColor('#fff');
    }
}