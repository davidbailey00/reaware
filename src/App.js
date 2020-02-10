import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Home from "./routes/Home";
import { colors } from "./lib/css";

import "./App.css";

const useStyles = createUseStyles({
  root: {
    backgroundColor: colors.light,
    color: colors.dark,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const styles = useStyles();

  return (
    <Router>
      <div className={styles.root}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route>
            <p>route not implemented</p>
            <p>
              <Link to="/">go back</Link>
            </p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
