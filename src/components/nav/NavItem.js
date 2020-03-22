import React from "react";
import { StyledNavLink } from "./HeaderStyle";

const NavItem = ({ children, to }) => (
  <StyledNavLink to={to} activeClassName="active">
    {children}
  </StyledNavLink>
);

export default NavItem;
