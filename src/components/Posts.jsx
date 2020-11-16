import React from 'react';
import { useSelector, connect } from 'react-redux'
import Post from './Post';

const Posts = ({syncPosts}) => {
    // const posts = useSelector(state => state.postsPage.posts)
    console.log(syncPosts)

    if (!syncPosts.length) {
        return <p>Постов нет</p>
    }
    return syncPosts.map(post => <Post key={post.id} post={post} /> );
}

const mapStateToProps = state => {
    return {
        syncPosts: state.postsPage.posts
    }
}

export default connect(mapStateToProps, null)(Posts);
