import React, { Component } from 'react';

class Titles extends Component {

  render() {
    return (
      <div>
        {this.props.articles.map(function (e) { return <h2>{e.title}</h2> })}
      </div>
    );
  }
}

export default Titles;
