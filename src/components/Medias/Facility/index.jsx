import styles from './facility.module.scss';

const Facility = ({ src, alt, title, description }) => {
  return (
    <div className={styles.container_facility}>
      <img src={src} alt={alt} />
      <div className={styles.facility_content}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Facility;
