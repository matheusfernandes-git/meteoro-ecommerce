import TextField from "../../components/TextField";
import Button from "../../components/Button";
import styles from "./news.module.scss";

const News = () => {
  return (
    <section className={styles.container}>
      <form className={styles.container_news}>
        <p>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? <strong>Cadastre-se!</strong>
        </p>
        <div>
          <TextField
            className={styles.email_input}
            type={"email"}
            placeholder="Digite seu email"
          />
          <Button className={styles.submitButton} type={"submit"}>
            Enviar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default News;
