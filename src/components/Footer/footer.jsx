import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        2023 © Desenvolvido por{" "}
        <strong>
          <a
            href="https://www.linkedin.com/in/matheus-fernandes-732a8322a/"
            target="/blank"
          >
            Matheus
          </a>
        </strong>
        .
      </p>
    </footer>
  );
};

export default Footer;
