import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToogleContext } from "../../../context/ToogleContext";

const Links = [
  { name: "Home", path: "/" },
  { name: "Sobre nós", path: "/sobre" },
];
const Menu = () => {
  const { isMenuOpen, handleMenu, iconProps } = useContext(ToogleContext);
  return (
    <section className={styles.containerNav}>
      <div className={styles.menuBurguer}>
        <Link>
          <AiOutlineMenu {...iconProps} onClick={handleMenu} />
        </Link>
      </div>
      <div className={isMenuOpen ? styles.activeMenu : styles.navMenu}>
        <ul className={styles.links}>
          <li className={styles.closeMenu}>
            <AiOutlineClose {...iconProps} onClick={handleMenu} />
          </li>
          {Links.map((link) => (
            <li key={link.name}>
              <MenuItem link={link} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
