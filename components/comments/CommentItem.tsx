import React from "react";

import styled from "styled-components";

const StyledComment = styled.li`
      margin: 1rem 0;
      color: #4a5555;
      font-size: 1.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid teal;
    `;

const CommentItem: React.FC<{ text: string }> = (props) => {
    const commentText: string = props.text;

    return (
        <StyledComment >
            <p>{commentText}</p>
        </StyledComment>
    );
};

export default CommentItem;