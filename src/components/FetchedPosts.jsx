import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Post from './Post';

import { fetchPosts } from '../redux/actions';

import Loader from './Loader';

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const fetchedPosts = useSelector(state => state.postsPage.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    // useEffect(() => {
    //     dispatch(fetchPosts());
    // }, [dispatch, fetchedPosts]);

    const hendleFetchPosts = () => {
        dispatch(fetchPosts())
    }

    if (loading) {
        return (
            <Loader />
        )
    }


    if (!fetchedPosts.length) {
        return <button onClick={hendleFetchPosts} className="btn btn-primary">Загрузить</button>
    }
    return fetchedPosts.map(post => <Post key={post.id} post={post} /> );
}

export default FetchedPosts;
