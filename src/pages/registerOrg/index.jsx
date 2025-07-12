import { Container } from "@/layout/ui/container";
import styles from "./index.module.css";
import { Title } from "@/layout/ui/title";
import { useContext, useEffect, useState } from "react";
import { changeKey } from "@/utils/changeKey";
import { FormBase } from "@/layout/formBase";
import inputs from "@/../public/jsons/inputsOrg.json";
import { Button } from "@/layout/ui/button";
import Link from "next/link";
import { FormContext } from "@/context/FormContext";
import { Stepper } from "@/layout/stepper";
import { IoIosArrowForward } from "react-icons/io";

export default function RegisterOrg() {
  const { formOrg, setFormOrg } = useContext(FormContext);

  const [steps, setSteps] = useState({
    step: { order: 1, description: "Dados da Organização" },
    arrow: <IoIosArrowForward size={18} />,
  });

  useEffect(() => {
    if (formOrg["Perfil_Atuacao"] === "Empresa Ofertante") {
      setSteps({
        ...steps,
        stepTwo: { order: 2, description: "Solução ou serviço ofertado" },
      });
    } else {
      setSteps({
        ...steps,
        stepTwo: { order: 2, description: "Necessidade ou desafio" },
      });
    }
  }, [formOrg["Perfil_Atuacao"]]);

  return (
    <div className={styles.containerRegisterOrg}>
      <Container>
        <Title text="Cadastro da organização" />
        <p>Abaixo informe os dados da organização que deseja cadastrar</p>
        <Stepper {...steps} />
        <FormBase inputs={inputs} formData={formOrg} setFormData={setFormOrg}>
          <Button customClass="btnColor">
            <Link href="/">Continuar</Link>
          </Button>
        </FormBase>
      </Container>
    </div>
  );
}
