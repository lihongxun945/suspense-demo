import React, { Suspense, Component } from 'react';
import Movie from './movie.js';
import Spinner from '../Spinner.js';

class List extends Component {
  render() {
    return (
      <div>
        <h2>热门电影</h2>
        <Suspense maxDuration={1500} fallback={<Spinner />}>
          <Movie id={0} />
          <Movie id={1} />
          <Movie id={2} />
          <Movie id={3} />
        </Suspense>
      </div>
    );
  }
}

export default List;
