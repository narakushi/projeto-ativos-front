import styles from "./index.module.css";

export const Form = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};
