import { useContext } from "react";
import HangingCartItem from "../../components/HangingCart/HangingCartItem/index";
import styles from "./productCartList.module.scss";
import { CartContext } from "../../context/CartContext";
import { useLocation } from "react-router-dom";
import CartItem from "../CartItem";

const ProductCartList = ({ classes, classContainer }) => {
  const { cart } = useContext(CartContext);
  const location = useLocation();

  return (
    <div className={`${classContainer}`}>
      <ul className={` ${styles.productList} ${classes}`}>
        {cart.map((product) => {
          return location.pathname === "/carrinho" ? (
            <CartItem
              key={product.id}
              id={product.id}
              src={product.src}
              alt={product.alt}
              title={product.titulo}
              price={product.preco}
              amount={product.amount}
              describe={product.descricao}
            />
          ) : (
            <HangingCartItem
              key={product.id}
              id={product.id}
              src={product.src}
              alt={product.alt}
              title={product.titulo}
              price={product.preco}
              amount={product.amount}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCartList;
