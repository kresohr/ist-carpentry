import React from "react";
import {
  ContactDescription,
  ContactDetailsItemDescription,
  ContactDetailsItemTitle,
  ContactDetailsLink,
  ContactDetailsRow,
  ContactDetailsSection,
  ContactHeadSection,
  ContactWrapper,
  Headline,
} from "../../assets/styles/ContactStyle";
import Mailer from "../Mailer/Mailer";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactHeadSection>
        <Headline>Kontakt</Headline>
        <ContactDescription>
          Kako bi nas kontaktirali, nazovite na jedan od telefonskih brojeva
          vidljivih ovdje ili pošaljite poruku na e-mail.
        </ContactDescription>
        <ContactDescription>
          Nastojati ćemo odgovoriti na Vaš upit u što kraćem vremenu.
        </ContactDescription>
      </ContactHeadSection>
      <ContactDetailsSection>
        <ContactDetailsRow>
          <ContactDetailsItemTitle>Tel 1:</ContactDetailsItemTitle>
          <ContactDetailsItemDescription>
            <ContactDetailsLink href="tel:+38598373554">
              +385 098 373 554
            </ContactDetailsLink>
          </ContactDetailsItemDescription>
        </ContactDetailsRow>
        <ContactDetailsRow>
          <ContactDetailsItemTitle>Tel 2:</ContactDetailsItemTitle>
          <ContactDetailsItemDescription>
            <ContactDetailsLink href="tel:+385031854500">
              +385 031 854 500
            </ContactDetailsLink>
          </ContactDetailsItemDescription>
        </ContactDetailsRow>
        <ContactDetailsRow>
          <ContactDetailsItemTitle>Adresa:</ContactDetailsItemTitle>
          <ContactDetailsItemDescription>
            Zagrebačka 20, 31417 Piškorevci, Hrvatska
          </ContactDetailsItemDescription>
        </ContactDetailsRow>
      </ContactDetailsSection>
      <Mailer />
    </ContactWrapper>
  );
};

export default Contact;
