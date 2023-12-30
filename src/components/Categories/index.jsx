import Title from "../Title";
import categories from "../../mocks/category.json";
import Category from "./Category";
import styles from "./categories.module.scss";
import { useContext } from "react";
import { HandleDisplayProductsContext } from "../../context/HandleDisplayProductsContext";

const Categories = () => {
  const { handleDisplayProductsByCategory } = useContext(
    HandleDisplayProductsContext
  );
  return (
    <section className={styles.container_categories}>
      <Title classes={styles.categories_title}>Busque por categoria:</Title>
      <div>
        {categories.map((category) => {
          return (
            <Category
              handleCategory={(selectedCategory) =>
                handleDisplayProductsByCategory(selectedCategory)
              }
              key={category.id}
              alt={category.alt}
              src={category.src}
              description={category.descricao}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
