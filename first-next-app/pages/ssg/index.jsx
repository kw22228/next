import React from 'react';
import Dashboard from './components/Dashboard';

export async function getStaticProps() {
  const userReq = await fetch('https://kw22228.github.io/Json/data.json');
  const userData = await userReq.json();

  return {
    props: {
      user: userData,
    },
    revalidate: 10,
  };
}

export default function Home(props) {
  return (
    <div>
      <Dashboard user={props.user} />
    </div>
  );
}
