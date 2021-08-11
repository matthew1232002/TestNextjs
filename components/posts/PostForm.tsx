import React, {Fragment, useRef} from 'react';
import Card from "../layout/Card";
import {StyledButton} from "../../styles/Button";
import {
    StyledPostForm,
    StyledPostFormActions,
    StyledPostFormArea, StyledPostFormAuthor,
    StyledPostFormText,
    StyledPostFormValues
} from "./PostForm.styled";

const PostForm = (props) => {
    const authorInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLTextAreaElement>(null);

    function submitFormHandler(event: React.FormEvent) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current!.value;
        const enteredText = textInputRef.current!.value;

        props.onAddQuote({author: enteredAuthor, text: enteredText});
    }

    return (
        <Fragment>
            <Card>
                <StyledPostForm onSubmit={submitFormHandler}>
                    <StyledPostFormValues>
                        <StyledPostFormArea htmlFor='author'>Author</StyledPostFormArea>
                        <StyledPostFormAuthor type='text' id='author' ref={authorInputRef}/>
                    </StyledPostFormValues>
                    <StyledPostFormValues >
                        <StyledPostFormArea htmlFor='text'>Text</StyledPostFormArea>
                        <StyledPostFormText id='text'  ref={textInputRef} />
                    </StyledPostFormValues>
                    <StyledPostFormActions>
                        <StyledButton>Add Quote</StyledButton>
                    </StyledPostFormActions>
                </StyledPostForm>
            </Card>
        </Fragment>
    );
};

export default PostForm;