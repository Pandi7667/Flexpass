
// export const metadata = {
//   title: "Special Promotions - One Month Free Membership Near San Francisco Bay Area - FLEXPASS",
//   description: "Join FLEXPASS now, gain total freedom with one membership. Top-rated gyms and wellness across Bay Area, free trial and 30 credits for new members",
// };


export const metadata = {
  title: "Special Promotions - One Month Free Membership Near San Francisco Bay Area - FLEXPASS",
  description: "Join FLEXPASS now, gain total freedom with one membership. Top-rated gyms and wellness across Bay Area, free trial and 30 credits for new members",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/download-the-app',
  },
  openGraph: {
    title: "Special Promotions - One Month Free Membership Near San Francisco Bay Area - FLEXPASS",
    description: "Join FLEXPASS now, gain total freedom with one membership. Top-rated gyms and wellness across Bay Area, free trial and 30 credits for new members", 
  },
};

//import Head from 'next/head';
import DownloadTheApp from './DownloadTheApp'


// export default function DownloadAppPage() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/download-the-app`} />
//       </Head>
//       <DownloadTheApp />
//     </>
//   );
// }

export default function DownloadAppPage() {
  return <DownloadTheApp />;
}