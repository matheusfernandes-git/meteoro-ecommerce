import { createContext, useState } from "react";
import categories from "../../mocks/category.json";
import product from "../../mocks/products.json";

export const HandleDisplayProductsContext = createContext();

const HandleDisplayProductsProvider = ({ children }) => {
  const [category, setCategory] = useState(categories);
  const [productsList, setProductsList] = useState(product);

  const handleDisplayProductsByCategory = (selectedCategory) => {
    if (selectedCategory === "Tudo") {
      setProductsList(product);
    } else {
      const filteredProduct = product.filter(
        (product) => product.categoria === selectedCategory
      );
      setProductsList(filteredProduct);
    }
  };

  const handleDisplayProductsBySearch = (value) => {
    const regExp = new RegExp(value, "i");
    if (value === "") {
      setProductsList(product);
    } else {
      const filteredProductsBySearch = product.filter((product) =>
        regExp.test(product.titulo)
      );
      setProductsList(filteredProductsBySearch);
    }
  };

  return (
    <HandleDisplayProductsContext.Provider
      value={{
        category,
        setCategory,
        productsList,
        setProductsList,
        handleDisplayProductsByCategory,
        handleDisplayProductsBySearch,
      }}
    >
      {children}
    </HandleDisplayProductsContext.Provider>
  );
};

export default HandleDisplayProductsProvider;
