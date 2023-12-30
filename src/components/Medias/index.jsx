import styles from "./medias.module.scss";
import Title from "../../components/Title";
import facilities from "../../mocks/facilites.json";
import Media from "./Facility";

const Medias = () => {
  return (
    <section className={styles.container_medias}>
      <Title classes={styles.container_facilities_title}>Conheça todas as nossas facilidades</Title>
      <div className={styles.container_facilities}>
        {facilities.map((facility) => {
          return (
            <Media
              key={facility.id}
              alt={facility.alt}
              src={facility.src}
              title={facility.titulo}
              description={facility.descricao}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Medias;
