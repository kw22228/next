import '../styles/globals.css';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <title>local이다</title>
        <meta property="og:title" content="Next practice" />
        <meta property="og:description" content="Run Next.js" />
      </Head> */}
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

// MyApp.getInitialProps = async appContext => {
//   const appProps = await App.getInitialProps(appContext);
//   const response = await fetch('https://kw22228.github.io/Json/data.json');
//   const data = await response.json();

//   return {
//     data,
//   };
// };

export default MyApp;
