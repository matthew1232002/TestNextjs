import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import {CommentModel} from "../../models/Comment.model";

const StyledCommentsList = styled.ul`
  list-style: none;
  margin: 2.5rem 0;
  padding: 0;
`;

const CommentsList = (props) => {
    const commentsList: CommentModel[] = props.comments;

    return (
        <StyledCommentsList>
            {commentsList.map((comment: CommentModel) => (
                <CommentItem key={comment.id} text={comment.text}/>
            ))}
        </StyledCommentsList>
    );
};

export default CommentsList;