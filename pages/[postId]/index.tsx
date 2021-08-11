import {Fragment, useEffect} from "react";
import HighlightedPost from "../../components/posts/HighlightedPost";
import Comments from "../../components/comments/Comments";
import useHttp from "../../components/hooks/use-http";
import {getSinglePost} from "../../components/api/api";
import {useRouter} from "next/router";
import Layout from "../../components/layout/Layout";


const postDetail = () => {
    const router = useRouter();
    const {postId} = router.query;

    const {sendRequest, data: loadedQuote} = useHttp(getSinglePost, true);

    useEffect(() => {
        sendRequest(postId);
    }, [sendRequest, postId]);
    let text;
    let author;
    if (loadedQuote !== null) {
        text = loadedQuote.text;
        author = loadedQuote.author;
    }


    return (
        <Fragment>
            <Layout>
                <HighlightedPost text={text} author={author}/>
                <Comments/>
            </Layout>
        </Fragment>
    );
}

export default postDetail;