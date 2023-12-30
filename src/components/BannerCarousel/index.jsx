import img1 from "../../assets/carousel1.png";
import img2 from "../../assets/carousel2.png";
import img3 from "../../assets/carousel3.png";
import styles from "./Carousel.module.scss";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

const BannerCarousel = () => {
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
  ];

  return (
    <section className={styles.carousel}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 2500 }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.src}
              alt="imagens do carrossel"
              className={styles.slide_item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerCarousel;
