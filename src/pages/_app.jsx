import "@/styles/globals.css";
import { Header } from "@/layout/ui/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
