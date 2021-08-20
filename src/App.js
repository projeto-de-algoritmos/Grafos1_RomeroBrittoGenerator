import "./App.css";
import { Box } from "@chakra-ui/react";
import { Switch } from "@material-ui/core";
import { useEffect, useState } from "react";
import Graph from "./structures/Graph";

function App() {
  const numberOfCols = 15;
  const [eraser, setEraser] = useState(false);
  const [brush, setBrush] = useState(true);
  const [cleanAll, setCleanAll] = useState(false);
  const [romeroBrito, setRomeroBrito] = useState(false);
  const [graph] = useState(new Graph(numberOfCols, numberOfCols));
  let rows = [...Array(numberOfCols).keys()];
  let cols = [...Array(numberOfCols).keys()];

  useEffect(() => {
    graph.buildGraph();
  }, [graph]);

  const setSwitches = (type) => {
    switch (type) {
      case "brush":
        setBrush(true);
        setEraser(false);
        setCleanAll(false);
        setRomeroBrito(false);
        document.getElementById("app").style.cursor = "pointer";
        break;
      case "eraser":
        setBrush(false);
        setEraser(true);
        setCleanAll(false);
        setRomeroBrito(false);
        document.getElementById("app").style.cursor = "crosshair";
        break;
      case "cleanall":
        setBrush(false);
        setEraser(false);
        setCleanAll(true);
        setRomeroBrito(false);
        document.getElementById("app").style.cursor = "all-scroll";
        break;
      case "romerobrito":
        setBrush(false);
        setEraser(false);
        setCleanAll(false);
        setRomeroBrito(true);
        document.getElementById("app").style.cursor = "cell";
        break;
      default:
        setBrush(false);
        setEraser(false);
        setCleanAll(false);
        setRomeroBrito(false);
        document.getElementById("app").style.cursor = "default";
        break;
    }
  };

  return (
    <div className="App" id="app">
      <div className="content">
        <h1>Romero Britto Generator</h1>

        <div className="functionality">
          <div className="alignBoard">
            {rows.map((row) => (
              <Box className="table" key={row}>
                {" "}
                {cols.map((column) => (
                  <Box
                    className="pixel"
                    border="1px"
                    borderColor="gray.200"
                    id={`row${row}-col${column}`}
                    key={`row${row}-col${column}`}
                    onClick={() => {
                      let id = `row${row}-col${column}`;

                      if (brush) {
                        graph.nodes.get(id).setColor("black");
                      }
                      if (eraser) {
                        graph.nodes.get(id).setColor("white");
                      }
                      if (cleanAll) {
                        graph.cleanAll(id);
                      }
                      if (romeroBrito) {
                        graph.romeroBritto(id);
                      }
                      // graph.romeroBritto();
                    }}
                  ></Box>
                ))}
              </Box>
            ))}
          </div>

          <div className="buttonsContent">
            <div className="swicthContent">
              <Switch
                checked={brush}
                color="primary"
                onChange={() => setSwitches("brush")}
              />
              <p className="deactivateSwitch">Pintar quadro</p>
            </div>
            <div className="swicthContent">
              <Switch
                checked={eraser}
                color="primary"
                onChange={() => setSwitches("eraser")}
              />
              <p className="deactivateSwitch">Borracha</p>
            </div>
            <div className="swicthContent">
              <Switch
                checked={cleanAll}
                color="primary"
                onChange={() => setSwitches("cleanall")}
              />
              <p className="deactivateSwitch">Apagar quadro</p>
            </div>
            <div className="swicthContent">
              <Switch
                checked={romeroBrito}
                color="primary"
                onChange={() => setSwitches("romerobrito")}
              />
              <p className="deactivateSwitch">Romero Britto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
