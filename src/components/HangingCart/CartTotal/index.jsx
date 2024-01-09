import { useNavigate } from "react-router-dom";
import Button from "../../Button/index";
import styles from "./cartTotal.module.scss";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const CartTotal = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, handleCartTotal, handleCartToogle } = useContext(CartContext);

  useEffect(() => {
    handleCartTotal();
  }, [cart]);

  return (
    <div className={styles.container}>
      <div className={styles.amount_infos}>
        <p>Total:</p>
        <p>R${cartTotal.toFixed(2)}</p>
      </div>
      <div>
        <Button
          handleClick={() => {
            navigate("/carrinho");
            handleCartToogle();
          }}
          variant="primary"
          className={styles.confirm_button}
        >
          Finalizar compra
        </Button>
      </div>
    </div>
  );
};

export default CartTotal;
