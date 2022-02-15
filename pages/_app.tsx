import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { GlobalStyle } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
