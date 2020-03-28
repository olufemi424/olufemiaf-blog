import React from "react";
import NavItem from "./NavItem";

import { StyledNav } from "./HeaderStyle";

const LINKS = [
  { name: "Blog", to: "/blog" },
  { name: "Resources", to: "/resources" },
  { name: "Features", to: "/features" },
];

const NavItems = () => {
  return (
    <StyledNav>
      {LINKS.map((item, i) => (
        <NavItem key={LINKS[i].name} to={LINKS[i].to}>
          {LINKS[i].name}
        </NavItem>
      ))}
    </StyledNav>
  );
};

export default NavItems;
