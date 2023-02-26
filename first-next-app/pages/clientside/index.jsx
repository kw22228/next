import React, { useState } from 'react';
// import Highlight from './components/Highlight';

/** 동적 import (ssr false로 클라이언트에서만 사용) */
import dynamic from 'next/dynamic';
const Highlight = dynamic(() => import('./components/Highlight'), { ssr: false });

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  //   const side = process.browser ? 'client' : 'server';

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);

  return (
    <div>
      {/* {isClient && <Highlight code={"console.log('hello')"} language="js" />} */}
      {/* {side} */}
    </div>
  );
}
