import { Container } from "@/layout/ui/container";
import styles from "./index.module.css";
import { Title } from "@/layout/ui/title";
import { useContext, useEffect } from "react";
import { changeKey } from "@/utils/changeKey";

export default function RegisterOrg() {
  return (
    <div className={styles.containerRegisterOrg}>
      <Container>
        <Title text="Cadastro da organização" />
        <p>Abaixo informe os dados da organização que deseja cadastrar</p>
      </Container>
    </div>
  );
}
