import React, { Component } from 'react';
import Searches from './Searches.js'
import {connect} from 'react-redux'
import {reduceArticles, reduceTopics} from './Actions'


class Header extends Component {

  render() {
      return (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <img href="%PUBLIC_URL%/news-icon.png" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    </div>
  </nav>

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



export default connect(mapStateToProps, mapDispatchToProps)(Header);
