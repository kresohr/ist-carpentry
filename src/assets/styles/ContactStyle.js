import styled from "styled-components";
import WoodTexture from "../images/wood.jpg";

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Headline = styled.h1`
  font-size: 42px;
  color: ${(props) => (props.$orange ? "#FFBF00" : "white")};
  text-shadow: 1px 1px 2px black;
  margin: 0;
  text-align: center;
  padding: 10px;
`;

export const ContactDescription = styled.p`
  color: #f2f2f2;
  margin: 0;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const ContactHeadSection = styled.div`
  width: 100%;
  padding-top: 26px;
  padding-bottom: 26px;
  background-image: url(${WoodTexture});
  background-repeat: repeat;
  background-size: cover;
`;

export const ContactDetailsSection = styled.div`
  border: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;

  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const ContactDetailsRow = styled.div`
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
`;

export const ContactDetailsLink = styled.a`
  color: #3aa4d7;
  margin: 0;
  padding: 6px;
`;

export const ContactDetailsItemTitle = styled.p`
  margin: 0;
  padding: 16px;

  font-weight: 700;
`;

export const ContactDetailsItemDescription = styled.p`
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  font-size: 16px;
`;
