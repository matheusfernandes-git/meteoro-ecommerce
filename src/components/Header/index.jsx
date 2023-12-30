import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./header.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { HandleDisplayProductsContext } from "../../context/HandleDisplayProductsContext";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const {
    cart,
    handleCart,
    iconProps,
    quantityCartProduct,
    handleQuantityProductsCart,
  } = useContext(CartContext);
  const { handleDisplayProductsBySearch } = useContext(
    HandleDisplayProductsContext
  );
  const [search, setSearch] = useState("");
  const location = useLocation();

  const searchProduct = (e) => {
    e.preventDefault();
    handleDisplayProductsBySearch(search);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    setSearch(inputValue);

    if (inputValue === "") {
      handleDisplayProductsBySearch("");
    }
  };

  useEffect(() => {
    handleQuantityProductsCart();
  }, [cart]);

  return (
    <header className={styles.header}>
      <div className={styles.container_nav}>
        <nav>
          <div className={styles.container_links}>
            <Link to={"/"}>
              <img
                className={styles.meteoro_logo}
                src={logo}
                alt="Logo da loja Meteora"
              />
            </Link>
            <div className={styles.container_toogle_items}>
              {/* <Menu /> */}
              {location.pathname !== "/carrinho" && (
                <Link className={styles.cart_icon}>
                  <FiShoppingCart {...iconProps} onClick={handleCart} />
                  {cart.length !== 0 && (
                    <span className={styles.cart_amount}>
                      {quantityCartProduct}
                    </span>
                  )}
                </Link>
              )}
            </div>
          </div>
        </nav>
        <div className={styles.search_form}>
          <div>
            <form>
              <div className={styles.search_container}>
                <input
                  className={styles.search_input}
                  type="text"
                  onChange={handleInputChange}
                  value={search}
                  placeholder="Digite o produto"
                />
                <FaSearch
                  className={styles.search_icon}
                  onClick={searchProduct}
                  color="fff"
                  size={20}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
