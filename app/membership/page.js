
// export const metadata = {
//   title: "Membership - Affordable Multi-Gym Access Near San Francisco Bay Area",
//   description: "Join FLEXPASS for diverse gym classes with one affordable membership. Act now, start your free trial today.",
// };


export const metadata = {
  title: "Membership - Affordable Multi-Gym Access Near San Francisco Bay Area",
  description: "Join FLEXPASS for diverse gym classes with one affordable membership. Act now, start your free trial today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/membership',
  },
  openGraph: {
  title: "Membership - Affordable Multi-Gym Access Near San Francisco Bay Area",
  description: "Join FLEXPASS for diverse gym classes with one affordable membership. Act now, start your free trial today.",
  },
};

//import Head from 'next/head';
import MemberShipPage from './MemberShip'


// export default function MemberShip() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/membership`} />
//       </Head>
//       <MemberShipPage />
//     </>
//   );
// }

export default function MemberShip() {
  return <MemberShipPage />;
}

