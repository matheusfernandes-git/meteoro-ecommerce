import styles from "./category.module.scss";

const Category = ({ src, alt, description, handleCategory }) => {
  const handleClick = () => {
    handleCategory(description);
  };
  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={styles.container_content}>
        <img src={src} alt={alt} />
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
