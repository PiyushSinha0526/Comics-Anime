import { BrowserRouter, Route, Switch } from "react-router-dom";
// css
import "./App.css";
// js components
import CardSlider from "./components/CardSlider";
import Navbar from "./components/Navbar";
import ShowAll from "./components/ShowAll";
import Details from "./components/Details";

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
          <Route exact path="/details/:type/:id">
            <Details/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
