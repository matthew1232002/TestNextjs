import React from "react";

import {StyledHighlightedAuthor, StyledHighlightedText, StyledHighlightedWrapper} from "./HighlightedPost.styled";


const HighlightedPost: React.FC <{ text:string; author:string}> = (props) => {
    return (
        <StyledHighlightedWrapper>
            <StyledHighlightedText>{props.text}</StyledHighlightedText>
            <StyledHighlightedAuthor>{props.author}</StyledHighlightedAuthor>
        </StyledHighlightedWrapper>
    );
}

export default HighlightedPost;