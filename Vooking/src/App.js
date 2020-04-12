import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stays from './pages/Stays';
import SearchResults from './pages/SearchResults';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Stays} />
        <Route exact path="/stays" component={Stays} />
        <Route exact path="/searchresults" component={SearchResults} />
      </Switch>
    </>
  );
}

export default App;
