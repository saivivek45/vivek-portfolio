import "@/styles/globals.css";
import { Layout } from "@/layout/Layout";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export const App = ({ Component, pageProps }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Fake delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
};

export default App;
