import styles from "./SeparatorLine.module.scss";

const SeparatorLine = ({ classes }) => {
  return <div className={`${styles.separator_line} ${classes}`}></div>;
};

export default SeparatorLine;
