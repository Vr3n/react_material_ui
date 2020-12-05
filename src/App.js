import "./App.css";

import NavBar from "./Components/NavBar/NavBar";

import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";


function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact from="/contact" render={props => <Contact {...props} />} />
        <Route exact from="/about" render={props => <About {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
