import React from 'react';
import { useSelector } from 'react-redux'
import Post from './Post';

const Posts = ({posts}) => {
    const items = useSelector(state => state.posts)
    console.log(items)

    if (!posts.length) {
        return <p>Постов нет</p>
    }
    return posts.map(post => <Post key={post.title} post={post} /> );
}

export default Posts;
