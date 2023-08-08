import React from "react";
import {
  HeroCTAButton,
  HeroContainer,
  HeroHeadline,
  HeroSubheadline,
} from "../../assets/styles/HeroStyle";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroHeadline>Stolarija po mjeri</HeroHeadline>
        <HeroSubheadline>
          Višegodišnje iskustvo projektiranja i izrade drvene stolarije
        </HeroSubheadline>
        <Link to="/contact">
          <HeroCTAButton>POŠALJITE NAM UPIT</HeroCTAButton>
        </Link>
      </HeroContainer>
    </>
  );
};

export default Hero;
