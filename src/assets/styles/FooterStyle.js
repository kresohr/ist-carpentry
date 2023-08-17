import styled from "styled-components";

export const FooterWrapper = styled.section`
  height: 100%;
  width: 100%;
  padding: 20px 0;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  bottom: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterMapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  height: 200px;
  padding: 20px;

  @media (min-width: 768px) {
    height: 250px;
    width: 250px;
    max-width: 350px;
    justify-content: end;
    align-items: end;
  }
`;
export const FooterMap = styled.iframe`
  height: 100%;
  width: 100%;
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 350px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 20px;
  color: white;
  @media (min-width: 768px) {
    padding: 20px;
    margin: 0;
  }
`;

export const FooterContactHeadline = styled.h1`
  color: white;
  font-size: 20px;
  margin: 0 0 10px 0;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const FooterContactSub = styled.p`
  color: white;
  font-size: 14px;
  margin: 0;
  padding: 4px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FooterImg = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 12px;
`;

export const FooterLinkWrapper = styled.a`
  color: #ffc300;
  margin: 0;
  padding: 6px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
