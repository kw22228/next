import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  /** 파이프라인 연산자 */
  // console.log(Math.random() * 10);
  // Math.random() |> x => x * 10 |> console.log;

  return <div className={styles.container}>about</div>;
}
