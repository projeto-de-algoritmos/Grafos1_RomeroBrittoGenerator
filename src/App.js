import "./App.css";
import { Box } from "@chakra-ui/react";
import { Button, Switch } from "@material-ui/core";
import { useState } from "react";
import Graph from "./structures/Graph";

function App() {
  const numberOfCols = 15;
  const [eraser, setEraser] = useState(false);
  const [brush, setBrush] = useState(true);
  const [cleanAll, setCleanAll] = useState(false);


  const renderCol = (row, graph) => {
    let cols = [];
    for (let i = 0; i < numberOfCols; i++) cols.push(i);

    return cols.map((column) => (
      <Box
        className="pixel"
        border="1px"
        borderColor="gray.200"
        id={`row${row}-col${column}`}
        key={`row${row}-col${column}`}
        onClick={() => {
          let id = `row${row}-col${column}`;
          
          if (eraser) {
            graph.romeroBritto();
          }
          if (cleanAll) {
            graph.dfs(id, "white");
          }
        }}
      ></Box>
    ));
  };

  const renderTable = () => {
    const graph = new Graph(numberOfCols, numberOfCols);
    graph.buildGraph();

    let rows = [];
    for (let i = 0; i < numberOfCols; i++) rows.push(i);
    return rows.map((row) => (
      <Box className="table" key={row}>
        {renderCol(row, graph)}
      </Box>
    ));
  };

  const setSwitches = (type) => {
    switch (type) {
      case "eraser":
        setBrush(false);
        setEraser(true);
        setCleanAll(false);
        break;
      case "cleanall":
        setBrush(false);
        setEraser(false);
        setCleanAll(true);
        break;
      default:
        setBrush(false);
        setEraser(false);
        setCleanAll(false);
        break;
    }
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Romero Britto Generator</h1>
        <div className="alignBoard">{renderTable()}</div>
        <div className="buttonsContent">
          <div className="swicthContent">
            <Switch
              checked={eraser}
              color="primary"
              onChange={() => setSwitches("eraser")}
            />
            <p className="deactivateSwitch">Pintar o quadro!<br/>
            Aperte o mouse quantas vezes você conseguir para criar artes!!!</p>
          </div>
          <div className="swicthContent">
            <Switch
              checked={cleanAll}
              color="primary"
              onChange={() => setSwitches("cleanall")}
            />
            <p className="deactivateSwitch">Apagar quadro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
