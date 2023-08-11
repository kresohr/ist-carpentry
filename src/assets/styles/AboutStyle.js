import styled from "styled-components";

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutHighlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;
  margin: 20px 0;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutHighlightImageWrapper = styled.div`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;

export const AboutHighlightImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const AboutHighlightContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: center;
  background-color: rgba(230, 230, 230, 0.5);
  max-width: 600px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const AboutHighlightContentDescription = styled.p`
  color: gray;
  margin: 0;
  padding: 20px;
`;

export const AboutHighlightBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
  margin-bottom: 20px;
  font-size: 22px;
`;
