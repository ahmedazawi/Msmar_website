import Layout from "../layouts/layout";
import "../styles/globals.css";
import "../styles/header.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
