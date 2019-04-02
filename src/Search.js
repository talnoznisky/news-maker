import React, { Component } from 'react';
import {articleReducer, topicReducer} from './actions';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

class Search extends Component {

  newsSearch = async function(e){

    e.preventDefault();
    let searchValue = document.getElementsByName('search')[0].value.toLowerCase();
    this.props.topicReducer(searchValue)
    
    let url = 'https://newsapiwrapper.herokuapp.com/v1/search?q='+searchValue
    let req = new Request(url);
    fetch(req)
        .then(response => response.json()
          .then(data =>
            this.props.articleReducer(data.articles)
        ))
}

  render() {
      return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div><img className="img-fluid icon" type="image/png" src="newspaper.svg"/></div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={e => this.newsSearch(e)}>
        <div className="container-fluid search-bar align-items-center">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search"/>
          <button className="btn ml-2 ml-sm-0" type="submit"><img className="img-fluid search-button" src="search.svg"/></button>
        </div>
      </form>
    </div>
  </nav>

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
        articleReducer: (articles) =>{
          dispatch(articleReducer(articles))
        },
          topicReducer: (searchValue) => {
            dispatch(topicReducer(searchValue))
          }
        }
      }


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
