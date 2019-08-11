import React from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Post from './component/Post';
import Home from './component/Home';
import Form from './component/Form';

import Error1 from './component/Error1';
import Navigation from './component/Navigation';
import Table from './component/Table';
import ListOrg from './component/ListOrg';

class App extends React.Component {

  render()
  {
    return (

      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path = "/" component ={Home} exact/>
          <Route path = "/form" component ={Form}/>
          <Route path = "/post" component ={Post}/>
          <Route path = "/table" component ={ListOrg}/>
          <Route component = {Error1}/>
        </Switch>
      

      </BrowserRouter>

    );
  }
 
}

export default App;
