import React, { Component } from 'react';

export default class extends Component {
  state = { loading: false };
  componentDidCatch(error, info) {
    this.setState({
      loading: true
    });
    error.p.then(() => {
      this.setState({
        loading: false
      });
    });
  }
  render() {
    return this.state.loading ? this.props.fallback : this.props.children
  }
}
