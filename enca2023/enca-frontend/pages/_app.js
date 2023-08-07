import "../styles/scss/style.scss";
import Layout from "../layout/site/Layout";
import LayoutAdmin from "../layout/admin/Layout-admin";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname.includes("/admin")) {
    return (
      <LayoutAdmin>
        <Component {...pageProps} />
      </LayoutAdmin>
    );
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
