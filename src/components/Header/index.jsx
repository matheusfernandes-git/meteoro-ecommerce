import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./header.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { RiShoppingCartFill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { HandleDisplayProductsContext } from "../../context/HandleDisplayProductsContext";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const {
    cart,
    iconProps,
    handleCartToogle,
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

  const isNotFound = location.pathname === "*";

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
            {!isNotFound && (
              <div className={styles.container_toogle_items}>
                {/* <Menu /> */}
                <Link className={styles.cart_icon}>
                  {cart.length === 0 ? (
                    <FiShoppingCart {...iconProps} onClick={handleCartToogle} />
                  ) : (
                    <>
                      <RiShoppingCartFill
                        {...iconProps}
                        onClick={handleCartToogle}
                      />
                      <span className={styles.cart_amount}>
                        {quantityCartProduct}
                      </span>
                    </>
                  )}
                </Link>
              </div>
            )}
          </div>
        </nav>
        {location.pathname !== "*" && (
          <div className={styles.search_form}>
            <div>
              <form>
                <div className={styles.search_container}>
                  <input
                    className={styles.search_input}
                    type="text"
                    onChange={handleInputChange}
                    value={search}
                    placeholder="Buscar produto"
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
        )}
      </div>
    </header>
  );
};

export default Header;
