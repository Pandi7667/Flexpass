
// export const metadata = {
//   title: "Partners - Easy Fitness Routine Flexibility - FLEXPASS",
//   description: "Join FLEXPASS to gain access to a wide variety of gym locations at your convenience, outbound or at home. Start your fitness journey with us today.",
// };


export const metadata = {
  title: "Partners - Easy Fitness Routine Flexibility - FLEXPASS",
  description: "Join FLEXPASS to gain access to a wide variety of gym locations at your convenience, outbound or at home. Start your fitness journey with us today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/partners',
  },
  openGraph: {
  title: "Partners - Easy Fitness Routine Flexibility - FLEXPASS",
  description: "Join FLEXPASS to gain access to a wide variety of gym locations at your convenience, outbound or at home. Start your fitness journey with us today.",
  },
};

//import Head from 'next/head';
import Partners from './Partners';

// export default function PartnersPage() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/partners`} />
//       </Head>
//       <Partners />
//     </>
//   );
// }


export default function PartnersPage() {
  return <Partners />;
}
//partners