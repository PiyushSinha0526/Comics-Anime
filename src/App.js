import { BrowserRouter, Route, Switch } from "react-router-dom";
// css
import "./App.css";
// js components
import CardSlider from "./components/CardSlider";
import Navbar from "./components/Navbar";
import ShowAll from "./components/ShowAll";
import Details from "./components/Details";
import Search from "./components/Search";

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
          <Route exact path="/search/:type/:term">
            <Search/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
