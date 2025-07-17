import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    postService.getPost(id).then(setPost);
  }, [id]);
  if (!post) return <div>Loading...</div>;
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Comments, etc. */}
    </div>
  );
}