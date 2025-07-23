// pages/home/index.js
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/special-promotions',
      permanent: false, // set to true for a permanent redirect
    },
  };
}

const HomePage = () => {
  return <div>Redirecting...</div>;
};

export default HomePage;