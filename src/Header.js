import React, { Component } from 'react';
import Searches from './Searches.js'
import {connect} from 'react-redux'
import {reduceArticles, reduceTopics} from './Actions'


class Header extends Component {

  render() {
      return (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">News 4 yous</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <Searches data={this.props.data['arr']}/>
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
