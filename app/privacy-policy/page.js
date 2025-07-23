
// export const metadata = {
//   title: "Privacy Policy - Personal Data Collection - FLEXPASS",
//   description: "FLEXPASS is committed to protect your privacy. We collect and use data to improve your experience. Visit our website and understand our Privacy Policy now.",
// };

export const metadata = {
  title: "Privacy Policy - Personal Data Collection - FLEXPASS",
  description: "FLEXPASS is committed to protect your privacy. We collect and use data to improve your experience. Visit our website and understand our Privacy Policy now.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/privacy-policy',
  },
  openGraph: {
  title: "Privacy Policy - Personal Data Collection - FLEXPASS",
  description: "FLEXPASS is committed to protect your privacy. We collect and use data to improve your experience. Visit our website and understand our Privacy Policy now.",
  },
};

//import Head from 'next/head';
import PrivacyPolicy from './PrivacyPolicy';


// export default function PrivacyPolicyPage() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/privacy-policy`} />
//       </Head>
//       <PrivacyPolicy />
//     </>
//   );
// }

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}