import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {articleReducer} from './actions'

class Results extends Component {

  getURL(searchValue){
    if(process.env.NODE_ENV == 'development'){
      // console.log('prod')
       return 'https://gist.githubusercontent.com/talnoznisky/44fbc43b6b359b5aa7051c8c994dd8d2/raw/d8db235fa59104e926a69fee4e8d1694f4d4b81e/apple.json'
    }else{
      // console.log('dev')
      return 'https://newsapiwrapper.herokuapp.com/v1/search?q='+searchValue
    }
  }

  newQuery = async function(){
    let searchValue = this.props.match.params.term;
    console.log('Results component set: '+searchValue)
    let req = new Request(this.getURL(searchValue));
    fetch(req)
        .then(response => response.json()
          .then(data =>
            this.props.articleReducer(data.articles)
        ))
      }
      componentDidMount(){
        this.newQuery();
      }
      componentDidUpdate(prevProps) {
         if (prevProps.match.params.term !== this.props.match.params.term) {
           this.newQuery();
         }
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Results));
