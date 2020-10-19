import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import axios from './utilities/axios'
import Home from './components/Home'
import './App.css';

const App = () => {

  // Bad practice, however this is because the backend server takes about 30s to respond due to certain maintainability factors
  useEffect( () => {

    axios.get("/api/url")
    .then( (data) => {
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
