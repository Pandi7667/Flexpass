

export const metadata = {
  title: "Special Promotions | MyFlexPass",
  description: "Join MyFlexPass today and get 6 free gym classes!",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/special-promotions',
  },
  openGraph: {
    title: "Special Promotions | MyFlexPass",
    description: "Join MyFlexPass today and get 6 free gym classes!",
  },
};

//import Head from 'next/head';
import SpecialPromotionsClient from './SpecialPromotions';


// export default function SpecialPromotionsPage() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/special-promotions`} />
//       </Head>
//       <SpecialPromotionsClient />
//     </>
//   );
// }

export default function SpecialPromotionsPage() {
  return <SpecialPromotionsClient />;
}

