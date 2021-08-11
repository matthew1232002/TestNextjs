import React, {useEffect} from 'react';

import Layout from "../components/layout/Layout";
import PostList from "../components/posts/PostList";
import useHttp from "../components/hooks/use-http";
import {getAllPosts} from "../components/api/api";
import NoPostsFound from "../components/posts/NoPostsFound";


function HomePage() {
    const {sendRequest, status, data: loadedQuotes} = useHttp(getAllPosts, true);

    useEffect( () => {
        sendRequest();
    }, [sendRequest]);


    if ( status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
        return <NoPostsFound />;
    }

    return (
        <Layout>
            <PostList posts={loadedQuotes}/>
        </Layout>
    );
}

export default HomePage;