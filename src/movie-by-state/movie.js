import React, { Component } from 'react';
import Spinner from '../Spinner.js';
import { fetchMovie } from '../api.js';

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      data: undefined
    }
  }
  componentDidMount() {
    fetchMovie(this.props.id).then((data) => {
      this.setState({
        loading: false,
        data: data
      })
    })
  }
  render() {
    if (this.state.loading) return <Spinner />;
    return (
      <div className="movie">
        <h4>{this.state.data.title}</h4>
        <p>{this.state.data.info}</p>
      </div>
    )
  }
}

export default Movie
