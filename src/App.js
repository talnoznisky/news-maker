import React, { Component } from 'react';
import Header from './Header.js'
import Home from './Home.js'
import { connect } from 'react-redux'
import {reduceArticles, topicReducer} from './Actions'
import './App.css';

const API_KEY = `${process.env.REACT_APP_API_KEY} ` 

class App extends Component {

  newsLoad = function(){

    var url = 'https://newsapi.org/v2/' +
              'top-headlines?' +
              'country=us&' +
              'apiKey='+API_KEY;

    var req = new Request(url);

    fetch(req)
        .then(response => response.json()
          .then(data =>
            this.props.reduceArticles(data.articles)
        ))
  }

  componentDidMount(){
    this.newsLoad()
  }



    render() {
      return (
        <div className="App">
        <Header data={this.props.topics}/>
          <Home data={this.props.articles}/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
        return {
         articles: state.articleReducer,
         topics: state.topicReducer

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
