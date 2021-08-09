import './App.css';
import { Box } from "@chakra-ui/react"
import { useState, useEffect } from 'react';


function App() {
  const [numberOfCols, setNumberOfCols] = useState(0);
  
  useEffect(() => {
    setNumberOfCols(20);
  }, [])

  const renderCol = (row) => {
    let cols = [];
    for (let i=0; i<numberOfCols; i++) cols.push(i);

    return cols.map((column) => (
      <Box 
        className="pixel"
        border="1px"
        borderColor="gray.200"
        onClick={console.log("alisa meu pelo")}
        id={`row${row}-col${column}`}
        key={`row${row}-col${column}`}
      >
      </Box>
    ));
  }

  const renderTable = () => {
    let rows = []
    for (let i=0; i<numberOfCols; i++) rows.push(i);
    return rows.map((row) => (
      <Box
        className="table"
        key={row}
      >
        {renderCol(row)}
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
