import styled from "styled-components";
import backgroundImage from "../images/kitchen.png";

export const HeroContainer = styled.div`
  background-image: url(${backgroundImage});
  margin-top: 120px;
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
  color: white;
  font-size: 42px;
  text-shadow: 1px 1px 2px black;
`;

export const HeroSubheadline = styled.h2`
  margin: 0;
  color: white;
  font-size: 28px;
  text-shadow: 1px 1px 2px black;
`;

export const HeroCTAButton = styled.button`
  margin-top: 50px;
  background: #292929;
  color: white;
  cursor: pointer;
  border: 3px solid black;
  padding: 15px 25px;
  font-size: 16px;
  font-family: "Lalezar", sans-serif;
`;
