import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {articleReducer} from './actions'
import {Switch, Route, withRouter} from 'react-router-dom'



const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {

  newsLoad = async function(){
    let url = 'https://newsapiwrapper.herokuapp.com/v1/all'
    var req = new Request(url);
    fetch(req)
        .then(response => response.json()
          .then(data =>
            this.props.articleReducer(data.articles)
        ))
      }

  componentWillMount(){
    this.newsLoad()
  }


    render() {
      return (
        <div className="App" id="root">
          <Search />
          <Results />
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
