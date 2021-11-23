import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterComponent from "./components/Characters/CharacterComponent.js";
import Header from "./components/Header/Header.js";
import Search from "./components/Search/Search.js";
import "./App.css";
import CharacterDetails from "./components/Characters/CharacterDetails.js";
import {Helmet} from "react-helmet";
import Footer from "./components/Footer/Footer.js";

function App() {

  return (
    <div className="App">
      <Router>
        <Helmet>
            <title>Rick and Morty-Homepage</title>
        </Helmet>
        <Header />
        <Switch>
          <Route path="/" exact component={CharacterComponent} />
          <Route path="/profile/:characterId-:name" component={CharacterDetails} />
          <Route path="/search" exact component={Search} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
