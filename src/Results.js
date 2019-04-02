import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {articleReducer, reduceTopics} from './actions'

class Results extends Component {
//this.props.data.map(function (e) { return <div class="row"><a href={e.url}><p>{e.title}</p></a></div>})}
  render() {

    return (
      <div class="container-fluid">
        {this.props.articles.map(function (e) { return <div class="row"><a href={e.url}><p>{e.title}</p></a></div>})}}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
     articles: state.articleReducer,
     searchValue: state.searchValue
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        articleReducer: (articles) =>{
          dispatch(articleReducer(articles))
        },
          reduceTopics: (topics) => {
            dispatch(reduceTopics(topics))
          }
        }
      }


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Results));
