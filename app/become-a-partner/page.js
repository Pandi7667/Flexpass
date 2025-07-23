
// export const metadata = {
//   title: "Gym & Fitness Membership Near San Francisco Bay Area | Become a Partner - FLEXPASS",
//   description: "FLEXPASS redefines gym and fitness memberships with unmatched flexibility and convenience, letting you break free from traditional commitments. Click here!",
// };


export const metadata = {
    title: "Gym & Fitness Membership Near San Francisco Bay Area | Become a Partner - FLEXPASS",
    description: "FLEXPASS redefines gym and fitness memberships with unmatched flexibility and convenience, letting you break free from traditional commitments. Click here!",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/become-a-partner',
  },
  openGraph: {
    title: "Gym & Fitness Membership Near San Francisco Bay Area | Become a Partner - FLEXPASS",
    description: "FLEXPASS redefines gym and fitness memberships with unmatched flexibility and convenience, letting you break free from traditional commitments. Click here!",
  },
};


//import Head from 'next/head';
import BecomeaPartnerpage from './BecomeaPartner'


// export default function BecomeaPartnerPage() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/become-a-partner`} />
//       </Head>
//       <BecomeaPartnerpage />
//     </>
//   );
// }

export default function BecomeaPartnerPage() {
  return <BecomeaPartnerpage />;
}

