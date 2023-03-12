import React, { useState } from 'react';

export default function Couter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <b>Count is: {count}</b>
      <br />

      <button onClick={() => setCount(prev => prev + 1)}>Increment +</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement -</button>
    </div>
  );
}
