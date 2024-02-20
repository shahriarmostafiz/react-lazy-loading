import React from 'react';
import fetchPost from '../api/fetchPost';
const resource = fetchPost("https://jsonplaceholder.typicode.com/posts?_limit=5")

const PostSelector = ({ onSelectPost }) => {
    const posts = resource.read()
    return (
        <div>
            <select onChange={onSelectPost}>
                <option value="">Select Post</option>
                {posts.map((post) => (
                    <option key={post.id} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PostSelector;