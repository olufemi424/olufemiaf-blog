import React from "react";
import NavItem from "./NavItem";

import { StyledNav } from "./HeaderStyle";

const LINKS = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog" },
  { name: "Resources", to: "/resources" },
  { name: "About", to: "/about" },
  { name: "Features", to: "/features" }, //TODO change this to road map (web development)
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
