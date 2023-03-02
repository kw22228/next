import React from 'react';
import { useRouter } from 'next/router';
export async function getStaticPaths() {
  return {
    paths: [{ params: { title: 'first' } }, { params: { title: 'second' } }],
    fallback: false,
  };
}
export async function getStaticProps(props) {
  console.log(props);
  const { title } = props.params;

  return {
    props: { title },
  };
}

export default function Title(props) {
  const { title } = props;
  return <div>{title}</div>;
}
