import { Container } from "@/layout/ui/container";
import { FormUser } from "@/layout/formUser";
import Image from "next/image";
import singInImg from "@/../public/signin-rafiki.svg";
import Link from "next/link";
import styles from "./index.module.css";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const inputs = [
    { label: "E-mail", type: "email" },
    { label: "Senha", type: "password" },
  ];

  return (
    <main className={styles.containerSingIn}>
      <Container>
        <div className={styles.containerImg}>
          <Image src={singInImg} width={580} height={770} />
        </div>
        <div className={styles.containerFormSingIn}>
          <FormUser
            title="Entrar"
            inputs={inputs}
            descBtn1="Entrar"
            descBtn2="Faça login com Google"
            urlBtn1="/registerOrg"
            urlBtn2="/registerOrg"
            icon={<FaGoogle />}
          />
          <Link className={styles.linkSingIn} href="/register">
            Ainda sem conta? Cadastre-se
          </Link>
        </div>
      </Container>
    </main>
  );
}
