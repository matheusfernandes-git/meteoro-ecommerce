import styles from "./cart.module.scss";
import cartBanner from "/assets/images/banner-carrinho.png";
import Title from "../../components/Title";
import ProductCartList from "../../components/ProductCartList";
import Summary from "../../components/Summary";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { deleteCartFromLocalStorage } from "../../utils/cart";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const { setCart } = useContext(CartContext);
  const handleCompletedPurchase = () => {
    setCart([]);
    deleteCartFromLocalStorage();
    setCompleted(!completed);
  };
  return (
    <section>
      <div className={styles.cart_banner}>
        <img src={cartBanner} alt="Imagem de uma sacola de compras" />
      </div>
      {completed ? (
        <section>
          <div className={styles.completed_purchase}>
            <Title classes={styles.completed_title}>Compra finalizada!</Title>
            <p>Obrigado por comprar na Meteora :)</p>
            <Button
              className={styles.keep_shopping_button}
              handleClick={() => navigate("/")}
            >
              Continue comprando
            </Button>
          </div>
        </section>
      ) : (
        <>
          <Title classes={styles.title}>Carrinho de Compras</Title>
          <div className={styles.cart_container}>
            <div className={styles.details_cart_container}>
              <Title classes={styles.details_cart_title}>
                Detalhes da compra
              </Title>
              <ProductCartList
                classContainer={styles.products}
                classes={styles.cart}
              />
            </div>
            <Summary completedPurchase={handleCompletedPurchase} />
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
