import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background-color: #3498db;
  border-radius: 6px;
  margin-bottom: 10px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover {
    color: black;
  }
`;

export const Title = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: white;
  text-shadow: black 1px 1px;
`;

export const Subtitle = styled.h2`
  font-size: 1em;
  text-align: center;
  color: white;
  text-shadow: black 1px 1px;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 400px;
justify-content: space-between';
align-items: center;
`;
