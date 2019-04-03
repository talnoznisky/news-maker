import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {articleReducer} from './actions'
import {Switch, Route, withRouter} from 'react-router-dom'



const API_KEY = `${process.env.REACT_APP_API_KEY}`

class Home extends Component {

  getURL(){
    if(process.env.NODE_ENV == 'development'){
      // console.log('dev')
       return 'https://gist.githubusercontent.com/talnoznisky/1d04a8cc4c812ce70ecb3b2d57bce7d8/raw/472e33d12d843e2359f5877679eafa85299927af/top-headlines.json'
    }else{
      // console.log('prod')
      return 'https://newsapiwrapper.herokuapp.com/v1/all'
    }
  }
  newsLoad = async function(){

    var req = new Request(this.getURL());
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
        <div class="container-fluid">
          {this.props.articles.map(function (e) { return <div class="row"><a href={e.url}><p>{e.title}</p></a></div>})}
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


export default connect(mapStateToProps, mapDispatchToProps)(Home);
