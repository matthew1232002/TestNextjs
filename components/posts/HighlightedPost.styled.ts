import styled from "styled-components";
import HighlightedPost from "./HighlightedPost";

export const StyledHighlightedWrapper = styled.figure`
  background-color: #162b2b;
  color: white;
  border-radius: 6px;
  padding: 3rem;
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

export const StyledHighlightedText = styled.p`
  font-size: 2.5rem;
`;

export const StyledHighlightedAuthor = styled.p`
  font-style: italic;
  font-size: 1.5rem;
  text-align: right;
  color: #a1e0e0;
`;
