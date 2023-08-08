import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Hamburger from "hamburger-react";

export const Nav = styled.div`
  background: #ffffff;
  height: 120px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const NavContainer = styled.nav`
  display: ${(props) => (props.toggled ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
  max-width: 1140px;
  margin-top: 280px;
  background-color: white;
  padding: 40px;

  @media (min-width: 768px) {
    display: flex;
    margin-top: 0px;
    gap: 50px;
    padding: 0px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const NavigationLink = styled(Link)`
  color: #333333;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  &.active {
    color: #ffc300;
  }
  &:hover {
    color: #ffc300;
    transition: color 0.2s ease;
  }
`;

export const NavItemWrapper = styled.div`
  @media (min-width: 768px) {
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
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 20px;
  padding-top: 30px;
  width: 135px;
  height: 60px;

  @media (min-width: 768px) {
    position: relative;
    display: block;
    padding: 30px;
    width: 150px;
    height: 80px;
  }
`;

export const NavLogo = styled.img`
  height: 100%;
  width: 100%;
`;

export const HamburgerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 40px;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerIcon = styled(Hamburger)`
  @media (min-width: 768px) {
  }
`;
