import React from 'react';
import Header from './components/Header';
import axios from 'axios'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Book from './components/Book';
import Main from './components/Main';
import Movie from './components/Movie';
import Character from './components/Character';
import Footer from './components/Footer';


const BEARER_TOKEN= 'Xn6NPFz3k-y7dtRic1KM';
axios.defaults.baseURL = 'https://the-one-api.dev/v2/';
axios.defaults.headers.common['Authorization'] = "Bearer "+BEARER_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <Router>
      <React.Fragment>
      <Header />
     
        <Switch>

        <Route exact path="/">
          <Main  />
          </Route>
          <Route  path="/book" >
          <Book/>
          </Route>
          <Route  path="/movie" >
          <Movie/>
          </Route>
          
          <Route  path="/character" >
          <Character/>
          </Route>
        </Switch>
    

       <Footer/>
      </React.Fragment>
    </Router>
  );
}

export default App;
