import { Suspense } from 'react';
import { useState } from 'react';
import PostSelector from './components/PostSelector';
import Comments from './components/Comments';
import demos from './lazy-data/demo';
import importDemo from './utils/lazyLoadingUtils/importDemo';

const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  // lazy loading codes 
  const [selectedDemo, setSelectedDemo] = useState(null)
  const loadDemo = async (file) => {
    const Demo = await importDemo(file)
    return <Demo />
  }
  const selectDemo = async (file) => {
    const DemoComponent = await loadDemo(file)
    setSelectedDemo(DemoComponent)
  }

  return (
    <>
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
      {/* Lazy loading  */}
      <h1>Lazy Loading </h1>
      <div>
        {
          demos.map(demo => <button key={demo.id} onClick={() => selectDemo(demo.file)} className='border px-2 py-1 shadow rounded'>{demo.name}</button>)
        }
      </div>
      <div>
        <Suspense fallback={<h1>loading components... </h1>}>
          {selectedDemo}
        </Suspense>

      </div>
      <div>

      </div>
    </>
  );
};

export default App;