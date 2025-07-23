
// export const metadata = {
//   title: "Terms of Use Consumer - Personal Data Collection - FLEXPASS",
//   description: "FLEXPASS is committed to protect your privacy. We collect and use data to improve your experience. Visit our website and understand our Privacy Policy now.",
// };

// import Head from 'next/head';

export const metadata = {
  title: "Terms of Use Consumer - Personal Data Collection - FLEXPASS",
  description: "FLEXPASS is committed to protect your privacy. We collect and use data to improve your experience. Visit our website and understand our Privacy Policy now.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/terms-and-conditions',
  },
  openGraph: {
    title: "Terms of Use Consumer - Personal Data Collection - FLEXPASS",
    description: "FLEXPASS is committed to protect your privacy. We collect and use data to improve your experience. Visit our website and understand our Privacy Policy now.",
  },
};

import TermsOfUsePage from './TermsAndConditions';

export default function TermsOfUseConsumer() {
  return <TermsOfUsePage />;
}


// export default function TermsOfUseConsumer() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/terms-and-conditions`} />
//       </Head>
//       <TermsOfUsePage />
//     </>
//   );
// }

//terms-and-conditions