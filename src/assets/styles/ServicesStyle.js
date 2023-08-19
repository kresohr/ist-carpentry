import styled from "styled-components";

export const ServiceWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
`;

export const ServiceRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
    max-width: 660px;
  }
`;

export const ServiceImageWrapper = styled.div`
  max-width: 300px;
  @media (min-width: 550px) {
    max-width: 450px;
  }
  @media (min-width: 768px) {
    max-width: 330px;
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
`;

export const ServiceDescription = styled.div`
  background-color: white;
  padding: 20px;
  text-align: center;
  max-width: 300px;
  min-height: 250px;
  @media (min-width: 550px) {
    max-width: 450px;
  }
  @media (min-width: 768px) {
    max-width: 330px;
    height: 100%;
  }
`;

export const ServiceDescriptionHeadline = styled.h1`
  color: #ffbf00;
`;

export const ServiceDescriptionText = styled.p`
  color: #4d4d4d;
`;

export const ServiceDescriptionSplit = styled.hr`
  border: 0;
  border-top: 3px solid #eaeaea;
  width: 16%;
`;

export const ServiceBottomWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ServiceBottomHeadline = styled.h2`
  margin: 0;
  color: white;
  text-shadow: 1px 1px 2px black;
  margin-top: 20px;
`;

export const ServiceBottomDescription = styled.p`
  color: #4d4d4d;
  padding-bottom: 20px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

export const ServiceBottomButton = styled.button`
  cursor: pointer;
  padding: 20px;

  width: 160px;
  border: solid 1px #d4d4d4;
  background-color: #292929;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin: 0 auto;
`;
