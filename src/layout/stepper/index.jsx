import { useState } from "react";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

export const Stepper = ({ step, arrow, stepTwo }) => {
  const pathname = usePathname();

  return (
    <div className={styles.stepper}>
      <ul className={styles.child}>
        <li>
          <span className={styles.stepOrder}>{step.order}</span>
          <span>{step.description}</span>
        </li>

        <li>{arrow}</li>

        <li>
          <span className={styles.stepOrder}>{stepTwo?.order}</span>
          <span>{stepTwo?.description}</span>
        </li>
      </ul>
    </div>
  );
};
