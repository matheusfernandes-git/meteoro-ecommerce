import styles from "./product.module.scss";
import Button from "../../Button";

const Product = ({ id, src, alt, title, description, price, addToCart }) => {
  const handleId = () => {
    addToCart(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <img src={src} alt={alt} />
        <div className={styles.product_card}>
          <h5>{title}</h5>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>R${price}</p>
          <Button handleClick={handleId} className={styles.addCartButton}>
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
