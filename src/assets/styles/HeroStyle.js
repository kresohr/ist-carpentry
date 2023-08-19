import styled from "styled-components";
import backgroundImage from "../images/kitchen.png";

export const HeroContainer = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  min-height: 400px;

  /* Parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroHeadline = styled.h1`
  margin: 0;
  color: #ffbf00;
  font-size: 35px;
  text-shadow: 1px 1px 2px black;

  @media (min-width: 768px) {
    font-size: 42px;
  }
`;

export const HeroSubheadline = styled.h2`
  margin: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  text-shadow: 1px 1px 2px black;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const HeroCTAButton = styled.button`
  margin-top: 26px;

  color: white;
  cursor: pointer;

  background-color: #292929;
  padding: 15px 25px;
  font-size: 14px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
`;
