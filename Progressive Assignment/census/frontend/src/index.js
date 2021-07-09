import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from './App';
import Search from './components/Search';
import Relations from './components/Relations';
import Navbar from './components/Navbar';
import Success from './components/Success';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/relations" component={Relations} />
        <Route path="/search" component={Search} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
