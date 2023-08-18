import React from "react";
import {
  ServiceDescription,
  ServiceDescriptionHeadline,
  ServiceDescriptionSplit,
  ServiceDescriptionText,
  ServiceImage,
  ServiceRow,
  ServiceWrapper,
} from "../../assets/styles/ServicesStyle";
import kitchen1 from "../../assets/images/kuhinja1.jpg";

const Services = () => {
  return (
    <ServiceWrapper>
      <ServiceRow>
        <ServiceDescription>
          <ServiceDescriptionHeadline>Kuhinje</ServiceDescriptionHeadline>
          <ServiceDescriptionSplit />
          <ServiceDescriptionText>
            Učinite svoju kuhinju izvanrednom. Vješto oblikujemo drvo kako bismo
            stvorili kuhinje po vašim željama, spajajući funkcionalnost s
            elegancijom u širokom spektru boja i materijala.
          </ServiceDescriptionText>
        </ServiceDescription>
        <ServiceImage src={kitchen1} />
      </ServiceRow>
      <ServiceRow $reverse>
        <ServiceDescription>
          <ServiceDescriptionHeadline>Interijeri</ServiceDescriptionHeadline>
          <ServiceDescriptionSplit />
          <ServiceDescriptionText>
            Oživite svoj prostor s našim izvanrednim drvenim interijerima.
            Pružamo maštovite dizajne i pažljivo izrađene detalje kako bismo
            stvorili interijere koji odražavaju vašu jedinstvenu estetiku i
            stil.
          </ServiceDescriptionText>
        </ServiceDescription>
        <ServiceImage src={kitchen1} />
      </ServiceRow>
      <ServiceRow>
        <ServiceDescription>
          <ServiceDescriptionHeadline>Eksterijeri</ServiceDescriptionHeadline>
          <ServiceDescriptionSplit />
          <ServiceDescriptionText>
            Neka Vaš vanjski prostor zablista uz dodir elegancije. Oblikujemo
            eksterijere prema Vašim idejama, stvarajući jedinstvene detalje od
            drveta koji se ističu ljepotom i funkcionalnošću.
          </ServiceDescriptionText>
        </ServiceDescription>
        <ServiceImage src={kitchen1} />
      </ServiceRow>
    </ServiceWrapper>
  );
};

export default Services;
