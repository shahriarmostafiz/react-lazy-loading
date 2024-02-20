/* eslint-disable react/prop-types */
import fetchPost from '../api/fetchPost';
const resource = fetchPost("https://jsonplaceholder.typicode.com/posts?_limit=5")

const PostSelector = ({ onSelectPost }) => {
    console.log("mounting and remounting ")
    const posts = resource.read()
    return (
        <div>
            <select onChange={onSelectPost} className='border-2 px-4 py-1.5 rounded w-fit  border-pink-600'>
                <option value="">Select Post</option>
                {posts?.map((post) => (
                    <option key={post.id} value={post.id} >
                        {post.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PostSelector;