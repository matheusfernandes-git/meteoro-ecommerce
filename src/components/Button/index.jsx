import styles from "./Button.module.scss";

const Button = ({ children, type, handleClick, className }) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={`${styles.default_button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
