import React from "react";
import {
  AboutHighlight,
  AboutHighlightBottomContainer,
  AboutHighlightContent,
  AboutHighlightContentDescription,
  AboutHighlightImage,
  AboutHighlightImageWrapper,
  AboutWrapper,
} from "../../assets/styles/AboutStyle";
import aboutImg from "../../assets/images/aboutus-coverimg.jpg";
import { Headline } from "../../assets/styles/ContactStyle";

const About = () => {
  return (
    <AboutWrapper>
      <AboutHighlight>
        <AboutHighlightContent>
          <Headline $orange>Kvaliteta kakvu zaslužujete</Headline>

          <AboutHighlightContentDescription>
            Dobrodošli u naš svijet stolarije gdje se svaka ideja pretvara u
            remek-djelo. Naša strast leži u stvaranju jedinstvenih drvenih
            čarolija koje <strong>obogaćuju vaš životni prostor</strong>.
          </AboutHighlightContentDescription>
          <AboutHighlightContentDescription>
            Dugi niz godina posvećenosti stolarskom zanatu osigurava da je
            <strong> naša stručnost na najvišoj razini</strong>. Naš tim
            iskusnih majstora kreativno balansira klasično i suvremeno,
            pružajući vam širok raspon stilova i tehnika.
          </AboutHighlightContentDescription>
          <AboutHighlightContentDescription>
            Naša <strong>posvećenost kvaliteti</strong> ne poznaje kompromise.
            Pažljivo odabiremo najfinije drvo i pomno ga obrađujemo kako bismo
            osigurali izvrsnost. Svaki komad prolazi rigorozne kontrole
            kvalitete, što rezultira trajnošću i očaravajućim detaljima.
          </AboutHighlightContentDescription>
        </AboutHighlightContent>
        <AboutHighlightImageWrapper>
          <AboutHighlightImage src={aboutImg} />
        </AboutHighlightImageWrapper>
      </AboutHighlight>
      <AboutHighlightBottomContainer>
        <AboutHighlightContentDescription>
          Vaša vizija postaje naša misija. Vaši snovi postaju naša inspiracija.
          Iz svakog komada drveta izvlačimo priču i stvaramo remek-djela koja će
          trajati generacijama.
        </AboutHighlightContentDescription>
        <AboutHighlightContentDescription>
          Radujemo se što ćemo surađivati s vama kako bismo oblikovali unikatne
          komade koji će vas oduševiti. S povjerenjem prepustite svoje projekte
          našem timu stručnjaka koji s ljubavlju i strašću stvaraju svaki
          detalj, donoseći toplinu drveta u vaš svakodnevni život.
        </AboutHighlightContentDescription>
      </AboutHighlightBottomContainer>
    </AboutWrapper>
  );
};

export default About;
