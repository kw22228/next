import Link from 'next/link';
import axiosInstance from '../lib/axios';

export async function getServerSideProps() {
  const { status, data } = await axiosInstance.get(`${process.env.API_ENDPOINT}/Json/data.json`);

  if (status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      people: status === 200 ? data.people : [],
    },
  };
}

export default function Home({ people }) {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>
          <Link href={`/users/${person.Name.replace(/\s/gi, '-')}`} passHref>
            {person.Name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
