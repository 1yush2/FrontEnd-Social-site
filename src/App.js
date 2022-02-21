import "./App.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import NavBar from "./components/NavBar";
import { Grid } from "@mui/material";
import LeftNav from "./components/LeftNav";
import Feedbox from "./components/Feedbox"
import RightNav from "./components/RIghtNav"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftNav />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feedbox />
        </Grid>
        <Grid item sm={3} >
          <RightNav />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
