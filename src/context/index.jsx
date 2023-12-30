import { CartProvider } from "./CartContext";
import HandleDisplayProductsProvider from "./HandleDisplayProductsContext";
import { HandleToogleProvider } from "./ToogleContext";

export const AllContextsProvider = ({ children }) => {
  return (
    <HandleToogleProvider>
      <HandleDisplayProductsProvider>
        <CartProvider>{children}</CartProvider>
      </HandleDisplayProductsProvider>
    </HandleToogleProvider>
  );
};
