import React, { useState } from 'react';
import { postService } from '../services/api';

export default function PostForm({ onSuccess }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postService.createPost({ title, content, author: 'You' });
    if (onSuccess) onSuccess();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Create Post</button>
    </form>
  );
}