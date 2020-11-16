import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
    if (!posts.length) {
        return <p>Постов нет</p>
    }
    return posts.map(post => <Post key={post.title} post={post} /> );
}

export default Posts;
