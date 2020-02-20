import React, { Component } from 'react';

export class Posts extends Component {
  state = {
    posts: [],
  };

  UNSAFE_componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => console.log(error));
  }

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
