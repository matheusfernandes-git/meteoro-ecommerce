import { createContext, useContext, useEffect, useState } from "react";
import { HandleDisplayProductsContext } from "../HandleDisplayProductsContext";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
} from "../../utils/cart";

const iconProps = {
  color: "white",
  size: 24,
  cursor: "pointer",
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { productsList } = useContext(HandleDisplayProductsContext);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [quantityCartProduct, setQuantityCartProduct] = useState(0);

  useEffect(() => {
    setCart(getCartFromLocalStorage());
  }, []);

  const handleCartToogle = () => setIsCartOpen(!isCartOpen);

  const addProductToCart = (id, amount = 1) => {
    const selectedProduct = productsList.find((product) => product.id === id);
    const itemInCart = cart.find((product) => product.id === id);
    if (selectedProduct && !itemInCart) {
      setCart((prevCart) => {
        const newCart = [...prevCart, { ...selectedProduct, amount }];
        saveCartToLocalStorage(newCart);
        return newCart;
      });
    }
  };

  const updateProductAmount = (id, newAmount) => {
    setCart((prevProduct) =>
      prevProduct.map((product) =>
        product.id === id ? { ...product, amount: newAmount } : product
      )
    );
    saveCartToLocalStorage(cart);
  };

  const increaseProduct = (id) => {
    const itemInCart = cart.find((product) => product.id === id);
    if (itemInCart) {
      updateProductAmount(id, (itemInCart.amount += +1));
    }
  };

  const decreaseProduct = (id) => {
    const itemInCart = cart.find((product) => product.id === id);
    if (itemInCart && itemInCart.amount > 1) {
      updateProductAmount(id, (itemInCart.amount += -1));
    }
  };

  const deleteProduct = (id) => {
    const findProduct = cart.find((product) => product.id === id);
    if (findProduct) {
      const filteredCart = cart.filter((product) => product.id !== id);
      setCart(filteredCart);
      saveCartToLocalStorage(filteredCart);
    }
  };

  const handleCartTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.preco * product.amount;
    });
    setCartTotal(total);
  };

  const handleQuantityProductsCart = () => {
    setQuantityCartProduct(cart.length);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        handleCartToogle,
        iconProps,
        addProductToCart,
        cart,
        setCart,
        increaseProduct,
        decreaseProduct,
        deleteProduct,
        handleCartTotal,
        cartTotal,
        handleQuantityProductsCart,
        quantityCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
