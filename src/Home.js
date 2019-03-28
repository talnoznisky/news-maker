import React, { Component } from 'react';
import {reduceArticles} from './Actions'
class Home extends Component {


  render() {
    return (
      <div>
        {this.props.data.map(function(e){return<div><a href = {e.url}><h2>{e.title}</h2></a></div>})}
      </div>
    );
  }
}

export default Home;
