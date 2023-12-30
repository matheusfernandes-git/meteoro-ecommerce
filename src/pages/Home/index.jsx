import Categories from "../../components/Categories/index";
import Medias from "../../components/Medias";
import News from "../../components/News";
import Products from "../../components/Products";
import HangingCart from "../../components/HangingCart/index";
import BannerCarousel from "../../components/BannerCarousel";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./home.module.scss";

const Home = () => {
  const { isCartOpen } = useContext(CartContext);

  const Overlay = () => {
    return <div className={isCartOpen ? styles.overlay : ""} />;
  };

  return (
    <section>
      <BannerCarousel />
      <HangingCart />
      <Overlay />
      <div>
        <Categories />
        <Products />
        <Medias />
        <News />
      </div>
    </section>
  );
};

export default Home;
