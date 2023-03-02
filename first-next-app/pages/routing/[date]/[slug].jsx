import React from 'react';
import { useRouter } from 'next/router';

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { date: '2021-01-01', slug: 'firstpost' } }],
//     fallback: false,
//   };
// }
// export async function getStaticProps(props) {
//   const { date, slug } = props.params;

//   return {
//     props: { date, slug },
//   };
// }

export async function getServerSideProps(props) {
  console.log(props);
  const { date, slug } = props.params;

  return {
    props: { date, slug },
  };
}

export default function Date(props) {
  const { date, slug } = props;
  return (
    <div>
      <p>Date: {date}</p>
      <p>slug: {slug}</p>
    </div>
  );
}
