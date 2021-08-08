export default class Node {
    constructor() {
        this.pos = null;
        this.color = null;
        this.wall = false;
    }
    
    setColor(color){
        if (this.wall === false) {
            this.color = color;
            return true;
        }
        
        return false;
    }

    getColor() {
        return this.color;
    }
}