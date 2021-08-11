import React from "react";

import {useRouter} from "next/router";

import {StyledItem, StyledItemAuthor, StyledItemBlockquote, StyledItemFigure, StyledItemText} from "./PostItem.styled";
import {StyledButton} from "../../styles/Button";


const PostItem: React.FC<{ text:string; id:string; author:string}> = (props) => {
    const router = useRouter();

    const showDetailsHandler = () => {
        router.push('/'+props.id);
    }
    return (
        <StyledItem>
            <StyledItemFigure>
                <StyledItemBlockquote>
                    <StyledItemText>{props.text}</StyledItemText>
                </StyledItemBlockquote>
                <StyledItemAuthor>{props.author}</StyledItemAuthor>
            </StyledItemFigure>
            <StyledButton onClick={showDetailsHandler}>
                View Fullscreen
            </StyledButton>
        </StyledItem>
    );
}

export default PostItem;