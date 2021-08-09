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

    holdAlg(timeHold) {
        return new Promise((res) => setTimeout(res, timeHold));
    }

    async bfs(startNode, color){
        const queue = [startNode];
        this.nodes.get(startNode).setColor(color);
        this.nodes.get(startNode).visitNode();

        while (queue.length > 0){
            const currentNode = queue.shift();
            
            if (!this.nodes.get(currentNode).isVisited){
                await this.holdAlg(15);
                this.nodes.get(currentNode).setColor(color);
                this.nodes.get(currentNode).visitNode();
            }

            const currentNodeNeighbors =  this.nodes.get(currentNode).getNeighbors();
            for (const bug of currentNodeNeighbors) {
                for (const currentNeighborID of bug) {
                    const currentNeighbor = this.nodes.get(currentNeighborID);
                    if (!currentNeighbor.isVisited){
                        queue.push(currentNeighborID);
                    }
                }
            }
        }
    }
}