import React from 'react';
import Login from './Components/Login/Login'
import 'bulma/css/bulma.css';
import '../node_modules/@fortawesome/react-fontawesome'
import './App.css';
import Profile from './Components/Profile/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Award from './Components/Award/Award';
import Review from './Components/Review/Review';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Login/>
            </Route>
              <Route path="/Profile">
              <Profile/>
              </Route>
                <Route path="/Award">
                <Award/>
                </Route>
                <Route path="/Review">
                <Review/>
                </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
