import styled from "styled-components";

export const ListContainer = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
  grid-gap: 20px;
`;

export const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
`;
