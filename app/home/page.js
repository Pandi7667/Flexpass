

//     <link rel="canonical" href="https://myflexpass.com/"/>


//import Head from 'next/head';

// export const metadata = {
//   title: "Customizable Monthly Fitness Credits - FLEXPASS",
//   description: "Join FLEXPASS for a variety of gym membership plans to suit your budget. Enjoy the flexibility of our monthly credits and no tie-in contracts.",
// };


export const metadata = {
    title: "Customizable Monthly Fitness Credits - FLEXPASS",
  description: "Join FLEXPASS for a variety of gym membership plans to suit your budget. Enjoy the flexibility of our monthly credits and no tie-in contracts.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/home',
  },
  openGraph: {
    title: "Customizable Monthly Fitness Credits - FLEXPASS",
    description: "Join FLEXPASS for a variety of gym membership plans to suit your budget. Enjoy the flexibility of our monthly credits and no tie-in contracts.",
  },
};


import Homepage from './Homepage'

// export default function HomePage() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/home`} />
//       </Head>
//       <Homepage />
//     </>
//   );
// }

export default function HomePage() {
  return <Homepage />;
}