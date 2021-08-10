import './App.css';
import { Box } from "@chakra-ui/react"
import { useEffect, useState } from 'react';
import Graph from './structures/Graph';


function App() {
  const numberOfCols = 8;
  const [clearBoard, setClearBoard] = useState(false);
  const [color, setColor] = useState("#654321");
  const [makeWall, setMakeWall] = useState(false);

  useEffect(() => {
    if (clearBoard) setColor("white");
    else setColor("#654321");
  }, [clearBoard]);

  useEffect(() => {
    if (makeWall) setColor("black");
    else setColor("#654321");
  }, [makeWall]);

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
          // graph.dfs(id, color)
          graph.romeroBritto();
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
      <button
        onClick={() => setClearBoard(!clearBoard)}
      >
        {clearBoard? 'Pintar quadro' : 'Apagar quadro'}
      </button>
      <button>
        Pintar as paredes
      </button>
    </div>
  );
}

export default App;
