import React, { Component } from 'react';
import Searches from './Searches.js'
import {connect} from 'react-redux'
import {reduceArticles, reduceTopics} from './Actions'


class Header extends Component {

  render() {
      return (

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
