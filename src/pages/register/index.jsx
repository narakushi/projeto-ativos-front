import Image from "next/image";
import styles from "./index.module.css";
import imageSingUp from "@/../public/singup-cuate.svg";
import { Container } from "@/layout/ui/container";
import { FormUser } from "@/layout/formUser";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function Register() {
  const inputs = [
    { label: "E-mail", type: "email" },
    { label: "Senha", type: "password" },
    { label: "Confirme sua senha", type: "password" },
  ];

  return (
    <main className={styles.containerSingUp}>
      <Container>
        <div className={styles.containerImage}>
          <Image
            width={580}
            height={700}
            src={imageSingUp}
            alt="Imagem de registro"
          />
        </div>
        <div className={styles.containerFormSing}>
          <FormUser
            title="Cadastre-se"
            inputs={inputs}
            descBtn1="Fazer cadastro"
            descBtn2="Registrar com o Google"
            urlBtn1="/login"
            urlBtn2="/login"
            icon={<FaGoogle />}
          />
          <Link href="/login" className={styles.linkLogin}>
            Já tem uma conta? Faça login
          </Link>
        </div>
      </Container>
    </main>
  );
}
