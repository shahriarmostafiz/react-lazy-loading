import { Suspense } from 'react';
import { useState } from 'react';
import PostSelector from './components/PostSelector';
import Comments from './components/Comments';

const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };
  return (
    <div className='p-4'>
      <Suspense fallback={<h1>loading...</h1>}>
        <PostSelector onSelectPost={handleSelectPost} />

      </Suspense>
      {
        selectedPostId && (
          <Suspense fallback={<h1>loading comments... </h1>}>
            <Comments postId={selectedPostId} />

          </Suspense>
        )
      }
    </div>
  );
};

export default App;