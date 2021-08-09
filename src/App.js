import './App.css';
import { Box } from "@chakra-ui/react"
import { useState } from 'react';
import Graph from './structures/Graph';


function App() {
  const [numberOfCols, setNumberOfCols] = useState(15);

  const renderCol = (row, graph) => {
    let cols = [];
    for (let i=0; i<numberOfCols; i++) cols.push(i);

    return cols.map((column) => (
      <Box 
        className="pixel"
        border="1px"
        borderColor="gray.200"
        id={`row${row}-col${column}`}
        key={`row${row}-col${column}`}
        onClick={() => {
          let id = `row${row}-col${column}`;
          // let node = graph.nodes.get(id);
          graph.bfs(id, "#654321")
        }}
      >
      </Box>
    ));
  }

  const renderTable = () => {
    const graph = new Graph(numberOfCols, numberOfCols);
    graph.buildGraph();

    let rows = [];
    for (let i=0; i<numberOfCols; i++) rows.push(i);
    return rows.map((row) => (
        <Box
          className="table"
          key={row}
        >
          {renderCol(row, graph)}
        </Box>
    ))
  }

  return (
    <div className="App">
      <h1>Romero Britto Generator</h1>
      <div className="alignBoard">
        {renderTable()}
      </div>
    </div>
  );
}

export default App;
