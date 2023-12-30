import Title from "../Title";
import styles from "./sumarry.module.scss";
import Button from "../Button";
import SeparatorLine from "../../components/SeparatorLine";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect } from "react";

const Summary = ({ completedPurchase }) => {
  const { cart, cartTotal, handleCartTotal, quantityCartProduct } =
    useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    handleCartTotal();
  }, [cart]);

  return (
    <section className={styles.summary_container}>
      <div className={styles.summary_container_content}>
        <div className={styles.summary_content}>
          <Title classes={styles.summary_title}>Sumário</Title>
          <div className={styles.infos}>
            <p>{quantityCartProduct} Produtos</p>
            <p>R$ {cartTotal.toFixed(2)}</p>
          </div>
          <div className={styles.infos}>
            <p>Frete</p>
            <p>R$ {(15).toFixed(2)}</p>
          </div>
          <SeparatorLine classes={styles.yellow_divisor} />
          <div className={styles.total}>
            <p>Total:</p>
            {cart.length !== 0 ? (
              <p>R${(cartTotal + 15).toFixed(2)}</p>
            ) : (
              <p>R$ 00.00</p>
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            handleClick={() => navigate("/")}
            className={styles.buy_more_button}
          >
            Continuar comprando
          </Button>
          <Button
            handleClick={completedPurchase}
            className={styles.confirm_button}
          >
            Finalizar compra
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Summary;
