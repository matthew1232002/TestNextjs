import styled from "styled-components";

export const StyledPostForm = styled.form`
  position: relative;
`;

export const StyledPostFormValues = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledPostFormArea = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

export const StyledPostFormAuthor = styled.input`
  font: inherit;
    padding: 0.35rem;
    border-radius: 4px;
    background-color: #f0f0f0;
    border: 1px solid #c1d1d1;
    display: block;
    width: 100%;
    font-size: 1.25rem;
    &:focus{
    background-color: #cbf8f8;
    outline-color: teal;
    }
`;

export const StyledPostFormText = styled.textarea`
  font: inherit;
    padding: 0.35rem;
    border-radius: 4px;
    background-color: #f0f0f0;
    border: 1px solid #c1d1d1;
    display: block;
    width: 100%;
    font-size: 1.25rem;
    &:focus{
    background-color: #cbf8f8;
    outline-color: teal;
    }
`;

export const StyledPostFormActions = styled.div`
  text-align: right;
`;

