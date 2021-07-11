import "./App.css";
import CardSlider from "./components/CardSlider";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowAll from "./components/ShowAll";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <CardSlider type="anime" />
            <CardSlider type="manga" />
          </Route>
          <Route exact path="/anime">
            <ShowAll type="anime"/>
          </Route>
          <Route exact path="/manga">
            <ShowAll type="manga"/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
