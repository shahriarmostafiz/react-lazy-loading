import React, { Suspense } from 'react';
import { useState } from 'react';
import PostSelector from './components/PostSelector';
import Comments from './components/Comments';

const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <PostSelector onSelectPost={handleSelectPost} />

      </Suspense>
      <Comments postId={selectedPostId} />

    </div>
  );
};

export default App;