import { Link } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ link }) => {
  return (
    <li
      className={link.name === "Home" ? styles.homeLink : styles.containerLinks}
    >
      <Link className={styles.link} href={link.path} aria-current="page">
        {link.name}
      </Link>
    </li>
  );
};

export default MenuItem;
