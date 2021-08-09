import './App.css';
import { Box } from "@chakra-ui/react"


function App() {
  const renderCol = () => {
    let numberOfCols = 15;
    let cols = [];
    for (let i=0; i<numberOfCols; i++){
      cols.push(i);
    }

    console.log(cols);
  } 

  return (
    <div className="App">
      <h1>oi</h1>
      <button onClick={renderCol}>alisa meu pelo</button>
      <Box 
        className="pixel"
        border="2px"
        onClick={renderCol}
      >
      </Box>
    </div>
  );
}

export default App;
