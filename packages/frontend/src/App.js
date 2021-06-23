import './App.css';
import Dashboard from './components/Dashboard/';
import Preference from './components/Preference/';
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/preference">
            <Preference/>
          </Route>
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
