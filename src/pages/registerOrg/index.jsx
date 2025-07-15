import { Container } from "@/layout/ui/container";
import styles from "./index.module.css";
import { Title } from "@/layout/ui/title";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "@/context/FormContext";
import { Stepper } from "@/layout/stepper";
import { Input } from "@/layout/ui/input";
import { Form } from "@/layout/ui/form";

export default function RegisterOrg() {
  const { formOrg, setFormOrg } = useContext(FormContext);

  return (
    <div className={styles.containerRegisterOrg}>
      <Container>
        <Title text="Cadastro da organização" />
        <p>Abaixo informe os dados da organização que deseja cadastrar</p>
        <Stepper />
        <Form>
          <input type="text" />
        </Form>
      </Container>
    </div>
  );
}
