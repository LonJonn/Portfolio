import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import GlobalStyles from "../styles/GlobalStyles";

const App = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Head>
      <title>Leon Salsiccia</title>
      <meta name="viewport" content="width=device-width" />
    </Head>

    <GlobalStyles />

    {/* Index page has custom navbar for hero section */}
    {router.pathname !== "/" && <Header />}
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
);

export default App;
