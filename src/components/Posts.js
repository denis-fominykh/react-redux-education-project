import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItem = this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    });

    return (
      <div>
        <h1>Posts</h1>
        {postItem}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
