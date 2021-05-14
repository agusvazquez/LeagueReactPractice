import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LogoImage } from "../../assets/league_logo.svg";
import { ReactComponent as GithubImage } from "../../assets/github.svg";

export const LogoContainer = styled(Link)`
  height: 50px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
  overflow: hidden;
  resize-mode: contain;
`;

export const Logo = styled(LogoImage)`
  height: inherit;
  width: inherit;
`;

export const Github = styled(GithubImage)`
  height: inherit;
  width: inherit;
  fill: white;
`;

export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  :hover {
    color: gray;
  }
`;

export const ExternalLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  :hover {
    color: gray;
  }
`;

OptionLink.displayName = "OptionLink";
