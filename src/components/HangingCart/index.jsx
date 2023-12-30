import styles from "./hangingCart.module.scss";
import Title from "../../components/Title";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import ProductCartList from "../ProductCartList";
import { CartContext } from "../../context/CartContext";
import CartTotal from "./CartTotal";

const HangingCart = () => {
  const { isCartOpen, handleCart, iconProps, cart } = useContext(CartContext);

  return (
    <div className={isCartOpen ? styles.activeCart : styles.closeCart}>
      <header>
        <Title classes={styles.cartTitle}>Carrinho</Title>
        <AiOutlineClose
          className={styles.close_hanging_cart}
          {...iconProps}
          onClick={handleCart}
        />
      </header>
      <main className={styles.container_content}>
        {cart.length !== 0 ? (
          <>
            {" "}
            <ProductCartList />
            <CartTotal />{" "}
          </>
        ) : (
          <p className={styles.emptyCart}>Seu carrinho está vazio! :(</p>
        )}
      </main>
    </div>
  );
};

export default HangingCart;
