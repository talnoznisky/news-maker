import React, { Component } from 'react';
import Titles from './Titles.js';
import Search from './Search.js'
import logo from './logo.svg';
import './App.css';

const API_KEY = `${process.env.REACT_APP_API_KEY}`
class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      baseURL: 'https://newsapi.org/v2/'
    }
  }

  newsLoad = async function(){
    var url = this.state.baseURL +
              'top-headlines?' +
              'country=us&' +
              'apiKey='+API_KEY

    var req = new Request(url);

    fetch(req)
        .then(response => response.json()
          .then(data =>
            this.setState({articles: data.articles})
        ))
  }

  componentWillMount(){
    this.newsLoad()
  }


    render() {
      return (
        <div className="App">
        <Search/>
          {this.state.articles.map(function (e) { return<a href={e.url}><h2>{e.title}</h2></a> })}
        </div>
      );
    }
  }


export default App;
