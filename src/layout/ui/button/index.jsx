import styles from "./index.module.css";

export const Button = ({ children, customClass }) => {
  return (
    <button className={`${styles.btnStyle} ${styles[customClass]}`}>
      {children}
    </button>
  );
};
