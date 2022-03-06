
import './App.css';

import React, { Component } from 'react'
import NavBar from './Compoents/NavBar';
import News from './Compoents/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 10;
 
  
  state = {
    progress:0
  } 
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
 
  render() {
    
    return (
      <div>
        <Router>
     <NavBar/>
     <LoadingBar
        color='#f11948'
        height={3}
        progress={this.state}
       
      />
     {/* <News setprogress={this.setprogress}  pageSize={this.pageSize} country="in" Category="science" /> */}
     <Switch>
          <Route exact path="/"> <News setprogress={this.setprogress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" Category="general" /></Route>
          <Route exact path="/business"> <News setprogress={this.setprogress}  apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="in" Category="business" /></Route>
          <Route exact path="/entertainment"> <News setprogress={this.setprogress}  apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" Category="entertainment" /></Route>
          <Route exact path="/general"> <News setprogress={this.setprogress}  apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" Category="general" /></Route>
          <Route exact path="/health"> <News setprogress={this.setprogress}  apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="in" Category="health" /></Route>
          <Route exact path="/science"> <News setprogress={this.setprogress}  apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="in" Category="science" /></Route>
          <Route exact path="/technology"> <News setprogress={this.setprogress}  apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="in" Category="technology" /></Route>
           
        </Switch>
     </Router>
      </div>
    )
  }
}

