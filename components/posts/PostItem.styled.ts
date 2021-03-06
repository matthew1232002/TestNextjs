import styled from "styled-components";

export const StyledItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #c2e7f0;
  :&{
  border-bottom: none;
}
`;

export const StyledItemFigure = styled.figure`
  margin: 0;
  padding: 0;
  width: 70%;
`;

export const StyledItemBlockquote = styled.blockquote`
  margin: 0;
  text-align: left;
  font-size: 1.5rem;
  color: #212929;
`;

export const StyledItemText = styled.p`
  margin: 0;
  margin-bottom: 0.25rem;
`;

export const StyledItemAuthor = styled.figcaption`
  font-style: italic;
  color: #566d6d;
`;

