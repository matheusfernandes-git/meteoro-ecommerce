import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container_404}>
      <div className={styles.not_found}>
        <h1>404</h1>
        <p>Ops! Página não encontrada :(</p>
        <p> A página que você está procurando não existe ainda.</p>
        <Link className={styles.home_link} to={"/"}>
          Ir para home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
