import Node from "./Node";

export default class Graph {
    constructor(rowNum, colNum) {
        this.nodes = new Map();
        this.rowNum = rowNum;
        this.colNum = colNum;
    }

    createNodes() {
        for (let row=0; row<this.rowNum; row++){
            for (let col=0; col<this.colNum; col++){
                let id = `row${row}-col${col}`;
                this.nodes.set(id, new Node(row, col));
            }
        }
    }

    connectNeighbors() {
        for (let row=0; row<this.rowNum; row++){
            for (let col=0; col<this.colNum; col++){
                let id = `row${row}-col${col}`;

                let neighbors = [];
                // Sentido horário
                if (row>0) neighbors.push(`row${row-1}-col${col}`);
                if (col<this.colNum-1) neighbors.push(`row${row}-col${col+1}`);
                if (row<this.rowNum-1) neighbors.push(`row${row+1}-col${col}`);
                if (col>0) neighbors.push(`row${row}-col${col-1}`);

                this.nodes.get(id).setNeighbors(neighbors);
            }
        }
    }

    buildGraph() {
        this.createNodes();
        this.connectNeighbors();
    }
}