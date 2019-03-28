import React, { Component } from 'react';
import Searches from './Searches.js'
import {connect} from 'react-redux'
import {reduceArticles, reduceTopics} from './Actions'

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class Button extends Component {

  newsSearch = async function(e, term){
    e.preventDefault();
    let searchValue = term
    let url = 'https://newsapi.org/v2/'+
              'everything?' +
              'q=' + searchValue + '&' +
              'from=2019-03-07&' +
              'sortBy=popularity&' +
              'apiKey='+API_KEY;
    let req = new Request(url);
    fetch(req)
        .then(response => response.json()
          .then(data =>
            this.props.reduceArticles(data.articles)))
          }

  render() {
    let term = this.props.data
    return (
      <div>
        <button type="button" name={term} class="btn btn-primary" onClick={e => this.newsSearch(e,term)}>
          {term.toLowerCase()}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
     articles: state.reduceArticles,
     topics: state.reduceTopics

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        reduceArticles: (articles) =>{
          dispatch(reduceArticles(articles))
        },
        reduceTopics: (topic) =>{
          dispatch(reduceTopics(topic))
          }
        }
      }

export default connect(mapStateToProps, mapDispatchToProps)(Button);
