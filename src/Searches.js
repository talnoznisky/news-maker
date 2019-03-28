import React, { Component } from 'react';
import {connect} from 'react-redux'
import {reduceArticles, reduceTopics} from './Actions'

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class Searches extends Component {

  newsSearch = async function(e){

    e.preventDefault();
    this.setState({searchValue: document.getElementsByName('search')[0].value.toLowerCase()})

    let searchValue = document.getElementsByName('search')[0].value.toLowerCase()
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
            this.props.reduceArticles(data.articles)

        ))
    this.props.reduceTopics(searchValue)
  }



  render() {
    return (
      <div class='row'>
       <form class="form-inline my-2 my-lg-0 ml-auto" onSubmit={e => this.newsSearch(e)}>
         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search"/>
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
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


export default connect(mapStateToProps, mapDispatchToProps)(Searches);
