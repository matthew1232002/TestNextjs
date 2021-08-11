import React, {useState, useCallback, useEffect} from "react";
import {useRouter} from "next/router";

import {StyledComments} from "./Comments.styled";
import {getAllComments} from "../api/api";
import useHttp from "../hooks/use-http";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
    const router = useRouter();
    const {sendRequest, data: loadedComments} = useHttp(getAllComments);
    const postId: any = router.query.postId;

    const addedCommentHandler = useCallback(() => {
        sendRequest(postId);
    }, [sendRequest, postId]);

    let comments;

    if (loadedComments ) {
        comments = <CommentsList comments={loadedComments}/>
    }

    return (
        <StyledComments>
            <NewCommentForm postId={postId} onAddedComment={addedCommentHandler}/>
            <h2>User Comments</h2>
            {comments}
        </StyledComments>

    );
}

export default Comments;