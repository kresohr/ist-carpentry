import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import {
  BodyCarouselImage,
  BodyContainer,
  BodyContainerButton,
  BodyDescription,
  BodyHeadline,
  BodySwiperWrapper,
  BodyWrapper,
} from "../../assets/styles/HomeStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import kitchen1 from "../../assets/images/kuhinja1.jpg";
import internal1 from "../../assets/images/namjestaj1.jpg";
import internal2 from "../../assets/images/namjestaj2.jpg";
import external2 from "../../assets/images/vanjski2.jpg";
import internal5 from "../../assets/images/namjestaj5.jpg";
import external4 from "../../assets/images/vanjski4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero />
      <BodyWrapper>
        <BodyContainer>
          <BodyHeadline>Što proizvodimo?</BodyHeadline>
          <BodyDescription>
            Proizvodimo sve za uređenje interijera ili eksterijera Vašeg doma
            ili poslovnog prostora.
          </BodyDescription>
          <BodyDescription>
            Dimenzije prostora nisu po standardima? Nema problema, sve radimo po
            mjeri.
          </BodyDescription>
          <Link to="/services">
            <BodyContainerButton>Usluge</BodyContainerButton>
          </Link>
          <BodySwiperWrapper>
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
                <BodyCarouselImage src={kitchen1} />
              </SwiperSlide>
              <SwiperSlide>
                <BodyCarouselImage src={internal2} />
              </SwiperSlide>
              <SwiperSlide>
                <BodyCarouselImage src={external4} />
              </SwiperSlide>
            </Swiper>
          </BodySwiperWrapper>
        </BodyContainer>
        <BodyContainer $transition>
          <BodyHeadline>Gdje proizvodimo?</BodyHeadline>
          <BodyDescription>
            Nalazimo se u selu Piškorevci, smještenom u srcu prekrasne
            Slavonije, nedaleko od Đakova.
          </BodyDescription>
          <BodyDescription>
            Naša povijest seže duboko u ove krajeve, a naši majstori donose
            nasljeđe vještine koja se prenosila generacijama.
          </BodyDescription>
          <Link to="https://www.google.com/maps/place/6CW5%2BRQ,+Pi%C5%A1korevci/@45.247063,18.409438,18z/data=!4m5!3m4!1s0x475c54695384f49b:0x6d2dc044efb89570!8m2!3d45.2470625!4d18.4094375?hl=hr&entry=ttu">
            <BodyContainerButton>Navigacija</BodyContainerButton>
          </Link>
        </BodyContainer>
        <BodyContainer>
          <BodyHeadline>Za koga proizvodimo?</BodyHeadline>
          <BodyDescription>
            Naša strast prema stolarskom zanatu ne poznaje granice, a naši
            proizvodi pronalaze svoje mjesto u različitim okruženjima.
          </BodyDescription>
          <BodyDescription>
            Bez obzira na to trebate li oplemeniti vlastiti dom ili obogatiti
            poslovni prostor, naša stolarija osigurava funkcionalnost i estetiku
            koja će zadovoljiti čak i najzahtjevnije potrebe.
          </BodyDescription>
          <BodySwiperWrapper>
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
                <BodyCarouselImage src={external2} />
              </SwiperSlide>
              <SwiperSlide>
                <BodyCarouselImage src={internal1} />
              </SwiperSlide>
              <SwiperSlide>
                <BodyCarouselImage src={internal5} />
              </SwiperSlide>
            </Swiper>
          </BodySwiperWrapper>
        </BodyContainer>
      </BodyWrapper>
    </>
  );
};

export default Home;
