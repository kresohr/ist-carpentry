import React from "react";
import {
  HeroCTAButton,
  HeroContainer,
  HeroHeadline,
  HeroSubheadline,
} from "../../assets/styles/HeroStyle";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroHeadline>Stolarija po mjeri</HeroHeadline>
        <HeroSubheadline>
          Višegodišnje iskustvo projektiranja i izrade drvene stolarije
        </HeroSubheadline>
        <HeroCTAButton>ZATRAŽI PONUDU</HeroCTAButton>
      </HeroContainer>
    </>
  );
};

export default Hero;
