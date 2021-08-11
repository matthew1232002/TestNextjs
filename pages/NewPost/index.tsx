import useHttp from "../../components/hooks/use-http";
import {addQuote} from "../../components/api/api";
import {useRouter} from "next/router";
import {useEffect} from "react";
import PostForm from "../../components/posts/PostForm";
import Layout from "../../components/layout/Layout";

const NewPost = () => {
    const router = useRouter();
    const {sendRequest, status} = useHttp(addQuote);


    useEffect(() => {
        if (status === 'completed') {
            router.back();
        }
    }, [status, router]);

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData);
    };

    return (
        <Layout>
            <PostForm onAddQuote={addQuoteHandler}/>
        </Layout>
    );
}

export default NewPost;
