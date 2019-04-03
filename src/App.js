import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js'
import Home from './Home.js'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {articleReducer} from './actions'
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {
    render() {
      return (
        <div className="App" id="root">
          <Search/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/results/:term" component={Results}/>
          </Switch>
          <div>
          </div>
        </div>

      );
    }
  }

  const mapStateToProps = (state) => {
      return {
       articles: state.articleReducer
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
          articleReducer: (articles) =>{
            dispatch(articleReducer(articles))
          }
          }
        }


export default connect(mapStateToProps, mapDispatchToProps)(App);
