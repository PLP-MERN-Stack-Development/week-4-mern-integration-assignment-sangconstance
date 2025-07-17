import React, { useEffect, useState } from 'react';
import { postService } from '../services/api';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postService.getAllPosts().then(setPosts);
  }, []);
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}