import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import GlobalStyles from "../styles/GlobalStyles";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
