import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Widget from '../../components/Widget';

export default function Index() {
  return (
    <>
      <Head>
        <title>Welcome to my Next.js website!!</title>
      </Head>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Widget pageName="medtadata" />
      </div>
    </>
  );
}
