import React from "react";
import {
  HeaderStyle,
  HeaderContainerStyle,
  HeaderWrapperStyle,
} from "./HeaderStyle";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Header = React.memo(() => {
  return (
    <HeaderStyle>
      <HeaderContainerStyle>
        <HeaderWrapperStyle>
          <Logo />
          <ul>
            <NavItems />
          </ul>
        </HeaderWrapperStyle>
      </HeaderContainerStyle>
    </HeaderStyle>
  );
});

export default Header;
