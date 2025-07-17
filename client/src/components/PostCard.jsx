import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
      </h3>
      <p>{post.content.substring(0, 100)}...</p>
      {post.featuredImage && (
        <img src={post.featuredImage} alt="Featured" style={{ maxWidth: '200px' }} />
      )}
      <div>Category: {post.category?.name}</div>
      <div>Author: {post.author}</div>
    </div>
  );
}