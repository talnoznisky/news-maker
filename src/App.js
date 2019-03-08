import React, { Component } from 'react';
import Titles from './Titles.js';
import Search from './Search.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      baseURL: 'https://newsapi.org/v2/',
      searchValue: "apple"
    }
  }

  newsLoad = function(){
    var url = this.state.baseURL +
              'top-headlines?' +
              'country=us&' +
              'apiKey=7e2314a11db34335924170ac37132702'

    var req = new Request(url);

    fetch(req)
        .then(response => response.json()
          .then(data =>
            this.setState({articles: data.articles})
        ))
  }


  newsSearch = function(){
    var url = this.state.baseURL +
              'everything?' +
              'q=' + this.state.searchValue + '&' +
              'from=2019-03-07&' +
              'sortBy=popularity&' +
              'apiKey=7e2314a11db34335924170ac37132702';

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
