import { useState, useEffect } from 'react';
import { postService } from '../services/api';

export default function usePosts({ page = 1, limit = 10, category = null, query = '' }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetch = query
      ? postService.searchPosts(query)
      : postService.getAllPosts(page, limit, category);
    fetch
      .then(data => setPosts(data))
      .catch(err => setError(err.message || 'Error loading posts'))
      .finally(() => setLoading(false));
  }, [page, limit, category, query]);

  return { posts, loading, error };
}