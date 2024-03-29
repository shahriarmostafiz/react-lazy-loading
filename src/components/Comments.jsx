import React from 'react';
import use from '../hook/use';
import { fetchData } from '../utils/data';

const Comments = ({ postId }) => {
    const comments = use(fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`))
    return (
        <div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;