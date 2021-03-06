import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
            <SearchParams />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
