import React, { useState } from 'react';
import Head from 'next/head';

export default function Widget({ pageName }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <>
        <Head>
          <title>You're browsing the {pageName} page</title>
        </Head>
        <div>
          <button onClick={() => setActive(false)}>Restore original title</button>
        </div>
      </>
    );
  }
  return (
    <>
      <button onClick={() => setActive(true)}>Change page Title</button>
    </>
  );
}
