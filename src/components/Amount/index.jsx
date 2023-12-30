import styles from "./amount.module.scss";
import Button from "../../components/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Amount = ({ id, amount, className }) => {
  const { increaseProduct, decreaseProduct } = useContext(CartContext);

  return (
    <div className={`${styles.container_amount} ${className}`}>
      <p>Quantidade:</p>
      <div>
        <Button
          handleClick={() => decreaseProduct(id)}
          className={styles.amount_button}
        >
          -
        </Button>
        <span className={styles.amount}>{amount}</span>
        <Button
          handleClick={() => increaseProduct(id)}
          className={styles.amount_button}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Amount;
