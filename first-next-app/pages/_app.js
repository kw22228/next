import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>local이다</title>
        <meta property="og:title" content="Next practice" />
        <meta property="og:description" content="Run Next.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
