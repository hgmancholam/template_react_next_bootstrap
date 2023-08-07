import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Custom() {
  return (
    <div>
      <Head>
        <title>Componentes personalizados</title>
        <meta name="description" content="Componentes personalizados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
