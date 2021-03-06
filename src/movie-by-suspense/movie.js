import React from 'react';
import { fetchMovie } from '../api.js';
import { unstable_createResource as createResource } from "react-cache";

/**
 * 使用Suspense实现
 */

const MovieFetcher = createResource(fetchMovie);

export default (props) => {
  const data = MovieFetcher.read(props.id)
  return (
    <div className="movie">
      <h4>{data.title}</h4>
      <p>{data.info}</p>
    </div>
  )
}

