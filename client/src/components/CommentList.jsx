import React from 'react';

export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) return <div>No comments yet.</div>;
  return (
    <ul>
      {comments.map((c, idx) => (
        <li key={idx}>
          <strong>{c.user}:</strong> {c.text}
        </li>
      ))}
    </ul>
  );
}