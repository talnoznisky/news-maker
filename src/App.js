import React, { Component } from 'react';
import Titles from './Titles.js';
import Search from './Search.js'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {reduceArticles} from './actions'


const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: []
    }
  }

  newsLoad = async function(){
    let url = 'https://newsapiwrapper.herokuapp.com/v1/all'
    var req = new Request(url);
    fetch(req)
        .then(response => response.json()
          .then(data =>
            this.props.reduceArticles(data.articles)
        ))
  }

  componentWillMount(){
    this.newsLoad()
  }


    render() {
      return (
        <div className="App" id="root">
        <Search />
          <div class="container-fluid">
          {this.props.articles.map(function (e) { return <div class="row"><a href={e.url}><p>{e.title}</p></a></div>})}
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
          reduceArticles: (articles) =>{
            dispatch(reduceArticles(articles))
            }
          }
        }


export default connect(mapStateToProps, mapDispatchToProps)(App);
