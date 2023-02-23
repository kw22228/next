import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      index
      <br />
      <button type="button" onClick={() => router.push('/about')}>
        about
      </button>
      <br />
      <a href="/about">about ssr</a>
    </div>
  );
}
