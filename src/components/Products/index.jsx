import { useContext } from "react";
import Title from "../../components/Title";
import Product from "./Product";
import styles from "./products.module.scss";
import { HandleDisplayProductsContext } from "../../context/HandleDisplayProductsContext";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const { productsList } = useContext(HandleDisplayProductsContext);
  const { addProductToCart } = useContext(CartContext);
  return (
    <section className={styles.container_products}>
      <Title classes={styles.container_products_title}>
        Produtos que estão bombando!
      </Title>
      <div>
        {productsList.map((product) => {
          return (
            <Product
              key={product.id}
              src={product.src}
              alt={product.alt}
              description={product.descricao}
              title={product.titulo}
              price={product.preco}
              id={product.id}
              addToCart={addProductToCart}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
