import React, { useEffect } from "react";
import {
  ServiceBottomButton,
  ServiceBottomDescription,
  ServiceBottomHeadline,
  ServiceBottomWrapper,
  ServiceDescription,
  ServiceDescriptionHeadline,
  ServiceDescriptionSplit,
  ServiceDescriptionText,
  ServiceImage,
  ServiceImageWrapper,
  ServiceRow,
  ServiceWrapper,
} from "../../assets/styles/ServicesStyle";
import kitchen1 from "../../assets/images/kuhinja1.jpg";
import kitchen2 from "../../assets/images/kuhinja2.jpg";
import kitchen3 from "../../assets/images/kuhinja3.jpg";
import kitchen4 from "../../assets/images/kuhinja4.jpg";
import kitchen5 from "../../assets/images/kuhinja5.jpg";
import internal1 from "../../assets/images/namjestaj1.jpg";
import internal2 from "../../assets/images/namjestaj2.jpg";
import internal3 from "../../assets/images/namjestaj3.jpg";
import internal4 from "../../assets/images/namjestaj4.jpg";
import internal5 from "../../assets/images/namjestaj5.jpg";
import external1 from "../../assets/images/vanjski1.jpg";
import external2 from "../../assets/images/vanjski2.jpg";
import external3 from "../../assets/images/vanjski3.jpg";
import external4 from "../../assets/images/vanjski4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
        <ServiceImageWrapper>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            onSlideChange={() => {
              console.log("slide change");
            }}
            navigation
            pagination={{ clickable: true, type: "bullets" }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <ServiceImage src={kitchen1} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={kitchen2} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={kitchen3} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={kitchen4} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={kitchen5} />
            </SwiperSlide>
          </Swiper>
        </ServiceImageWrapper>
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
        <ServiceImageWrapper>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            onSlideChange={() => {
              console.log("slide change");
            }}
            navigation
            pagination={{ clickable: true, type: "bullets" }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <ServiceImage src={internal1} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={internal2} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={internal3} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={internal4} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={internal5} />
            </SwiperSlide>
          </Swiper>
        </ServiceImageWrapper>
      </ServiceRow>

      {/* OVO JE ZA TEST SWIPERA. */}
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
        <ServiceImageWrapper>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            onSlideChange={() => {
              console.log("slide change");
            }}
            navigation
            pagination={{ clickable: true, type: "bullets" }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <ServiceImage src={external1} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={external2} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={external3} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceImage src={external4} />
            </SwiperSlide>
          </Swiper>
        </ServiceImageWrapper>
      </ServiceRow>
      <ServiceBottomWrapper>
        <ServiceBottomHeadline>... I još toga!</ServiceBottomHeadline>
        <ServiceBottomDescription>
          Ne vidite ono što tražite? Ne brinite! <br />
          Radimo po narudžbi.
        </ServiceBottomDescription>
        <Link to="/contact">
          <ServiceBottomButton>Kontakt</ServiceBottomButton>
        </Link>
      </ServiceBottomWrapper>
    </ServiceWrapper>
  );
};

export default Services;
