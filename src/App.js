import "./App.css";
import { makeStyles } from "@mui/styles";
import NavBar from "./components/NavBar";
import { Grid } from "@mui/material";
import LeftNav from "./components/LeftNav";
import Feedbox from "./components/Feedbox";
import RightNav from "./components/RIghtNav";
import Dialer from "./components/Dialer";

const useStyles = makeStyles((theme) => ({
  rightNavigation: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <NavBar />
      <Grid container>
        <Grid item sm={3} xs={2}>
          <LeftNav />
        </Grid>
        <Grid item sm={6} xs={10}>
          <Feedbox />
        </Grid>
        <Grid item sm={3} className={classes.rightNavigation}>
          <RightNav />
        </Grid>
      </Grid>
      <Dialer />
    </div>
  );
}

export default App;
