import styled from "styled-components";

export const StyledNewCommentForm = styled.form`
  margin-top: 1rem;
  position: relative;
  text-align: center;
`;

export const StyledNewCommentControl = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledNewCommentArea = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

export const StyledNewCommentInput = styled.textarea`
  font: inherit;
  padding: 0.35rem;
  border-radius: 4px;
  background-color: #f0f0f0;
  border: 1px solid #c1d1d1;
  display: block;
  width: 100%;
  font-size: 1.25rem;
  &:focus {
    background-color: #cbf8f8;
    outline-color: teal;
  }
`;



