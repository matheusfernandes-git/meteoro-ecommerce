import styles from "./hangingCart.module.scss";
import Title from "../../components/Title";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect } from "react";
import ProductCartList from "../ProductCartList";
import { CartContext } from "../../context/CartContext";
import CartTotal from "./CartTotal";

const HangingCart = () => {
  const { isCartOpen, handleCart, iconProps, cart } = useContext(CartContext);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("cart-open");
    } else {
      document.body.classList.remove("cart-open");
    }
  }, [isCartOpen]);

  return (
    <div className={`${isCartOpen ? styles.active_cart : styles.close_cart}`}>
      <header>
        <Title classes={styles.cart_title}>Carrinho</Title>
        <AiOutlineClose
          className={styles.close_hanging_cart}
          {...iconProps}
          onClick={handleCart}
        />
      </header>
      <main className={styles.container_content}>
        {cart.length !== 0 ? (
          <>
            <ProductCartList
              classes={`${styles.mobile_scroll} ${
                cart.length >= 4 ? styles.active_scroll : ""
              } `}
            />
            <CartTotal />
          </>
        ) : (
          <p className={styles.empty_cart}>Seu carrinho está vazio! :(</p>
        )}
      </main>
    </div>
  );
};

export default HangingCart;
