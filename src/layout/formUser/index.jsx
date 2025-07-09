import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Title } from "../ui/title";
import styles from "./index.module.css";
import Link from "next/link";

export const FormUser = ({
  title,
  inputs,
  descBtn1,
  descBtn2,
  urlBtn1,
  urlBtn2,
  icon,
}) => {
  return (
    <form action="" className={styles.containerForm}>
      <Title text={title} />

      <div className={styles.containerFormInputs}>
        {inputs.map((input) => (
          <Input {...input} key={input.label} />
        ))}
      </div>

      <div className={styles.containerButtons}>
        <Button customClass="btnColor">
          <Link href={urlBtn1}>{descBtn1}</Link>
        </Button>
        <Button>
          <Link href={urlBtn2}>
            <span
              style={{ marginRight: "15px", height: "16px", width: "16px" }}
            >
              {icon}
            </span>
            {descBtn2}
          </Link>
        </Button>
      </div>
    </form>
  );
};
