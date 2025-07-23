
// export const metadata = {
//   title: "Gym Pass | Low-Cost Memberships Near San Francisco Bay Area| How It Works - FLEXPASS",
//   description: "Transform your wellness routine with FLEXPASS! Enjoy low-cost memberships and a versatile gym pass to boost your health and relaxation. Join today!",
// };


export const metadata = {
  title: "Gym Pass | Low-Cost Memberships Near San Francisco Bay Area| How It Works - FLEXPASS",
  description: "Transform your wellness routine with FLEXPASS! Enjoy low-cost memberships and a versatile gym pass to boost your health and relaxation. Join today!",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/how-it-works',
  },
  openGraph: {
  title: "Gym Pass | Low-Cost Memberships Near San Francisco Bay Area| How It Works - FLEXPASS",
  description: "Transform your wellness routine with FLEXPASS! Enjoy low-cost memberships and a versatile gym pass to boost your health and relaxation. Join today!",
  },
};

//import Head from 'next/head';
import HowitWorksPage from './HowitWorks'


// export default function HowItEorksPage() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/how-it-works`} />
//       </Head>
//       <HowitWorksPage />
//     </>
//   );
// }


export default function HowItEorksPage() {
  return <HowitWorksPage />;
}

