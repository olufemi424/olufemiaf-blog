import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: var(--navbar);
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  //box-shadow: 0 0.5rem 2rem var(--shadow-color);
  transition: background 0.2s ease-out;
`;

export const HeaderWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  user-select: none;
  height: 8rem;
`;

export const HeaderContainerStyle = styled.div`
  max-width: 124rem;
  width: 100%;
  margin: 0 auto;
  padding: 0px 4rem;
`;

export const StyledNav = styled.nav`
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  transition: color 0.2s ease-out;

  &:hover {
    color: var(--primary);
  }

  &.active {
    color: var(--primary);
  }
`;
