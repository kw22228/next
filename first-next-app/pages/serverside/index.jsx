import React from 'react';

export async function getServerSideProps() {
  const userRequest = await fetch('https://kw22228.github.io/Json/data.json');
  const userData = await userRequest.json();

  return {
    props: {
      user: userData,
    },
  };
}

export default function Home(props) {
  return <div>Welcome, {props.user.people[0].Name}!</div>;
}
