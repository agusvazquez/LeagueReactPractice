import React from "react";
import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  LogoContainer,
  Logo,
  ExternalLink,
  Github,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo style={{ height: "inherit", width: "inherit" }} />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/champions">CHAMPIONS</OptionLink>
        <OptionLink to="/my_profile">PROFILE</OptionLink>
        <ExternalLink
          href="https://github.com/agusvazquez/LeagueReactPractice"
          target="_blank"
        >
          <Github />
        </ExternalLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
