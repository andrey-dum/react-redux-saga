import React from 'react';
import Post from './Post';

const FetchedPosts = ({posts}) => {
    if (!posts.length) {
        return <button className="btn btn-primary">Загрузить</button>
    }
    return posts.map(post => <Post key={post} post={post} /> );
}

export default FetchedPosts;
