import React, { Component } from 'react';
import Movie from './movie.js';
import Spinner from '../Spinner.js';
import Suspense from './suspense.js';

class List extends Component {
  render() {
    return (
      <div>
        <h2>热门电影</h2>
        <Suspense maxDuration={1500} fallback={<Spinner />}>
          <Movie id={0} />
        </Suspense>
      </div>
    );
  }
}

export default List;
