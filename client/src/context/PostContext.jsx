import React, { createContext, useContext, useState } from 'react';
import { postService } from '../services/api';

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async (page = 1, limit = 10, category = null) => {
    setLoading(true);
    try {
      const data = await postService.getAllPosts(page, limit, category);
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Error loading posts');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostContext.Provider value={{ posts, fetchPosts, loading, error }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePostsContext() {
  return useContext(PostContext);
}