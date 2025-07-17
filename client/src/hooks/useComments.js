import { useState, useEffect } from 'react';
import { postService } from '../services/api';

export default function useComments(postId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;
    postService.getPost(postId)
      .then(data => setComments(data.comments || []))
      .finally(() => setLoading(false));
  }, [postId]);

  const addComment = async (commentData) => {
    const updatedPost = await postService.addComment(postId, commentData);
    setComments(updatedPost.comments);
  };

  return { comments, loading, addComment };
}