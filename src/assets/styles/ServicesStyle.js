import styled from "styled-components";

export const ServiceWrapper = styled.section`
  background-color: pink;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`;

export const ServiceRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;

  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
    max-width: 660px;
  }
`;

export const ServiceImage = styled.img`
  height: 100%;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 330px;
  }
`;

export const ServiceDescription = styled.div`
  background-color: orange;
  padding: 30px;
  text-align: center;
  min-height: 260px;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const ServiceDescriptionHeadline = styled.h1``;

export const ServiceDescriptionText = styled.p``;

export const ServiceDescriptionSplit = styled.hr`
  border: 0;
  border-top: 3px solid #eaeaea;
  width: 16%;
`;
