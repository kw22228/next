import Link from 'next/link';
import axiosInstance from '../../lib/axios';

export async function getServerSideProps(ctx) {
  const { username } = ctx.query;

  const { status, data } = await axiosInstance.get(`${process.env.API_ENDPOINT}/Json/data.json`);
  if (status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: data.people.find(person => person.Name === username.replace(/-/gi, ' ')),
    },
  };
}

function UserPage({ user }) {
  return (
    <div>
      <div>
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <b>Name:</b> {user.Name}
        </div>
        <div>
          <b>Position:</b> {user.Position}
        </div>
        <div>
          <b>Office:</b> {user.Office}
        </div>
        <div>
          <b>Age:</b> {user.Age}
        </div>
        <div>
          <b>Start Date:</b> {user.Start_Date}
        </div>
        <div>
          <b>Salary:</b> {user.Salary}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
