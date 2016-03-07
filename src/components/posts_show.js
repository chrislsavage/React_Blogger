import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  componentWillMount() {
    this.props.getPost(this.props.params.id);
  }

  render() {
    const { post } = this.props;
    // same as const post = this.props.post;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to home</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, {getPost})(PostsShow);
