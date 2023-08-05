import React from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavLogoWrapper,
  NavigationLink,
} from "../../assets/styles/NavbarStyle";
import logoImage from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavigationLink to="/services">USLUGE</NavigationLink>
          <NavigationLink to="/projects">PROJEKTI</NavigationLink>
          <NavLogoWrapper to="/">
            <NavLogo src={logoImage} />
          </NavLogoWrapper>
          <NavigationLink to="/about-us">O NAMA</NavigationLink>
          <NavigationLink to="/contact">KONTAKT</NavigationLink>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
