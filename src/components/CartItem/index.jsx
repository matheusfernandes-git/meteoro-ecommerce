import styles from "./CartItem.module.scss";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Amount from "../Amount";
import SeparatorLine from "../SeparatorLine";

const CartItem = ({ id, src, alt, title, price, amount, describe }) => {
  const { iconProps, deleteProduct } = useContext(CartContext);

  const handleId = () => {
    deleteProduct(id);
  };

  return (
    <>
      <li className={styles.product}>
        <div className={styles.container}>
          <div className={styles.product_details}>
            <img src={src} alt={alt} />
            <div>
              <h3>{title}</h3>
              <p>{describe}</p>
            </div>
          </div>
          <div className={styles.product_infos}>
            <div className={styles.infos}>
              <div className={styles.product_cart_info}>
                <h4>R${price.toFixed(2)}</h4>
                <Amount className={styles.amount} id={id} amount={amount} />
                <MdDelete onClick={handleId} {...iconProps} />
              </div>
            </div>
          </div>
        </div>
      </li>
      <SeparatorLine />
    </>
  );
};

export default CartItem;
