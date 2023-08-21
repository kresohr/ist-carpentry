import styled from "styled-components";

export const BodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin: 40px 20px 40px 20px;

  text-align: center;
`;

export const BodyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => (props.$transition ? "#FFF5EA" : "#F6F6F6")};
  max-width: 600px;
  padding-bottom: 40px;
`;

export const BodyHeadline = styled.h1`
  margin: 0;
  margin-top: 20px;
  padding: 14px;
`;

export const BodyDescription = styled.p`
  margin: 0;
  padding: 14px;
  max-width: 480px;
  margin: 0 auto;
`;

export const BodySwiperWrapper = styled.div`
  width: 100%;
  padding: 20px 20px 0px 20px;
  max-width: 500px;
  margin: 0 auto;
`;

export const BodyCarouselImage = styled.img`
  display: block;
  width: 100%;
`;

export const BodyContainerButton = styled.button`
  margin-top: 16px;
  color: white;
  cursor: pointer;
  background-color: #292929;
  padding: 15px 25px;
  font-size: 14px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
`;
