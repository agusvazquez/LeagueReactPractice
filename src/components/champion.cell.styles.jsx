import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  color: red;
`;

export const Title = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: white;

  &:hover {
    color: grey;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1em;
  text-align: center;
  color: white;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 400px;
justify-content: space-between';
align-items: center;
`;
