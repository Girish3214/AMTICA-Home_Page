import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import DefaultPage from "./components/pages/DefaultPage";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" component={DefaultPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
