import React, { useState } from "react";
import {
  HamburgerIcon,
  HamburgerWrapper,
  Nav,
  NavContainer,
  NavLogo,
  NavLogoWrapper,
  NavigationLink,
} from "../../assets/styles/NavbarStyle";
import logoImage from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <>
      <Nav>
        <HamburgerWrapper
          onClick={() => {
            console.log(menuToggled);
            setMenuToggled(!menuToggled);
          }}
        >
          <HamburgerIcon />
        </HamburgerWrapper>
        <NavLogoWrapper to="/">
          <NavLogo src={logoImage} />
        </NavLogoWrapper>
        <NavContainer toggled={menuToggled}>
          <NavigationLink to="/services">USLUGE</NavigationLink>
          <NavigationLink to="/projects">PROJEKTI</NavigationLink>

          <NavigationLink to="/about-us">O NAMA</NavigationLink>
          <NavigationLink to="/contact">KONTAKT</NavigationLink>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
