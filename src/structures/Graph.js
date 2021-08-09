import Node from "./Node";

export default class Graph {
    constructor(rowNum, colNum) {
        this.nodes = new Map();
        this.rowNum = rowNum;
        this.colNum = colNum;
    }

    buildGraph() {
        for (let row=0; row<this.rowNum; row++){
            for (let col=0; col<this.colNum; col++){
                let id = `row${row}-col${col}`;
                this.nodes.set(id, new Node(row, col));
            }
        }
    }
}