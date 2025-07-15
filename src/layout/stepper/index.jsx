import styles from "./index.module.css";
import { usePathname } from "next/navigation";

export const Stepper = ({ currentStep, numberOfSteps }) => {
  const pathname = usePathname();

  return (
    <div className={styles.stepper}>
      <ul className={styles.child}>
        <li>oi</li>
      </ul>
    </div>
  );
};
