import React, {useEffect, useRef} from "react";

import {
    StyledNewCommentArea,
    StyledNewCommentControl,
    StyledNewCommentForm,
    StyledNewCommentInput
} from "./NewCommentForm.styled";
import useHttp from "../hooks/use-http";
import {addComment} from "../api/api";
import {StyledButton} from "../../styles/Button";


const NewCommentForm = (props) => {
    const commentTextRef = useRef<HTMLTextAreaElement>(null);

    const {sendRequest, status} = useHttp(addComment);

    const {onAddedComment} = props;

    useEffect(() => {
        onAddedComment();

    }, [onAddedComment, status]);


    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = commentTextRef.current!.value;

        sendRequest({commentData: {text: enteredText}, postId:props.postId});
    };

    return (
        <StyledNewCommentForm onSubmit={submitFormHandler}>
            <StyledNewCommentControl onSubmit={submitFormHandler}>
                <StyledNewCommentArea htmlFor='comment'>Your Comment</StyledNewCommentArea>
                <StyledNewCommentInput id='comment' rows='5' ref={commentTextRef}/>
            </StyledNewCommentControl>
            <div>
                <StyledButton>Add Comment</StyledButton>
            </div>
        </StyledNewCommentForm>
    );
}

export default NewCommentForm;