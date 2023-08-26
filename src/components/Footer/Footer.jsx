import React from "react";
import {
  FooterContact,
  FooterContactHeadline,
  FooterContactSub,
  FooterMap,
  FooterLinkWrapper,
  FooterWrapper,
  FooterMapWrapper,
  FooterImg,
} from "../../assets/styles/FooterStyle";
import FacebookIcon from "../../assets/images/facebook.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMapWrapper>
        <FooterMap
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.2590166237107!2d18.40889032925582!3d45.24706344290003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c54695384f49b%3A0x6d2dc044efb89570!2zNkNXNStSUSwgUGnFoWtvcmV2Y2k!5e0!3m2!1shr!2shr!4v1679736911077!5m2!1shr!2shr"
        ></FooterMap>
      </FooterMapWrapper>

      <FooterContact>
        <FooterContactHeadline>Kontakt</FooterContactHeadline>
        <FooterLinkWrapper href="tel:+38598373554">
          +385 098 373 554
        </FooterLinkWrapper>

        <FooterLinkWrapper href="mailto:ist.piskorevci@gmail.com">
          ist.piskorevci@gmail.com
        </FooterLinkWrapper>
        <FooterContactSub>Zagrebačka 20</FooterContactSub>
        <FooterContactSub>31417 Piškorevci</FooterContactSub>
        <FooterContactSub>Hrvatska</FooterContactSub>
        <a href="https://web.facebook.com/profile.php?id=100057356263406">
          <FooterImg src={FacebookIcon} />
        </a>
      </FooterContact>
    </FooterWrapper>
  );
};

export default Footer;
