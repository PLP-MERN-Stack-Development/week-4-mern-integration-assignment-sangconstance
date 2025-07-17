import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';
import { CategoryProvider } from './context/CategoryContext';

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <PostProvider>
          {/* ...your routes/components here... */}
        </PostProvider>
      </CategoryProvider>
    </AuthProvider>
  );
}

export default App;