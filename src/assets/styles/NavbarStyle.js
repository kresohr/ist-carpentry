import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #ffffff;
  height: 150px;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLink = styled(Link)`
  color: #333333;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 22px;

  &.active {
    color: #ffc300;
  }
  &:hover {
    color: #ffc300;
    transition: color 0.2s ease;
  }
`;

// Button je za sad izbačen iz navigacije

/* export const NavButton = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const NavButtonLink = styled(Link)`
  background: #343434;
  color: #ffffff;
  padding: 10px 22px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: black;
  }
`; */

export const NavLogoWrapper = styled(Link)`
  display: block;
  width: 150px;
  height: 80px;
`;

export const NavLogo = styled.img`
  height: 100%;
  width: 100%;
`;