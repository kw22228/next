import React from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
      }}
    >
      <div>MY Website</div>
      <div style={{ width: '48%', display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/">Home</Link>
        <Link href="/todos">Todos</Link>
        <Link href="/todos/first">first</Link>
        <Link href="/todos/second">second</Link>
      </div>
    </div>
  );
}
