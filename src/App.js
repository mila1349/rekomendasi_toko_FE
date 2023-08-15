import React from "react";
import Home from "./pages/Home";
import RekomendasiView from "./pages/Rekomendasi";
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 
class App extends React.Component {
  render() {
    return <div className="app">
        <Router>
          <Switch>

          <Route exact path="/rekomendasi" component={RekomendasiView}/>

          <Route exact path="/" component={Home}/>

          </Switch>
        </Router>
    </div>;
  }
}
 
export default App;