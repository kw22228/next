import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

import Navbar from '../components/Navbar';

import CartContextPrvoider from '../context/cartContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hello Next.js</title>
      </Head>

      <CartContextPrvoider>
        <Navbar />
        <Component {...pageProps} />
      </CartContextPrvoider>
    </>
  );
}

export default MyApp;
