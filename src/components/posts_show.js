import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/index'

class PostsShow extends Component {
  componentWillMount() {
    this.props.getPost(this.props.params.id);
  }
  render() {
    return <div>Show post {this.props.title}</div>
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, {getPost})(PostsShow);
