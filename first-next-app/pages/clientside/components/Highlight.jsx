import React from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect } from 'react';

export default function Highlight({ code }) {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.initHighlighting();
  }, []);

  return (
    <>
      <pre>
        <code className="js">{code}</code>
      </pre>
    </>
  );
}
