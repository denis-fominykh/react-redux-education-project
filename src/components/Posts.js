import React, { Component } from 'react';

export class Posts extends Component {
  render() {
    const postItem = this.state.posts.map(post => {
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
