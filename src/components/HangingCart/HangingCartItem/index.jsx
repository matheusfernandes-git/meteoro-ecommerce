import styles from "./hangingCartItem.module.scss";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Amount from "../../Amount";
import SeparatorLine from "../../SeparatorLine";

const HangingCartItem = ({ id, src, alt, title, price, amount }) => {
  const { iconProps, deleteProduct } = useContext(CartContext);

  const handleId = () => {
    deleteProduct(id);
  };

  return (
    <>
      <li className={styles.product}>
        <img src={src} alt={alt} />
        <div className={styles.container_infos}>
          <div className={styles.product_infos}>
            <p>{title}</p>
            <Amount className={styles.cart_amount} id={id} amount={amount} />
            <h4>R${price.toFixed(2)}</h4>
          </div>
        </div>
        <MdDelete onClick={handleId} {...iconProps} />
      </li>
      <SeparatorLine />
    </>
  );
};

export default HangingCartItem;
