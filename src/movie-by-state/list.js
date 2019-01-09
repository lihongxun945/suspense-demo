import React, { Component } from 'react';
import Movie from './movie.js';

class List extends Component {
  render() {
    return (
      <div>
        <h2>热门电影</h2>
        <Movie id={0} />
        <Movie id={1} />
        <Movie id={2} />
        <Movie id={3} />
      </div>
    );
  }
}

export default List;
