
// export const metadata = {
//   title: "Contact Us - FLEXPASS Help and Contact Information",
//   description: "Boost your gym experience with FLEXPASS. Open 247 for relentless fitness journeys. Start now.",
// };

export const metadata = {
  title: "Contact Us - FLEXPASS Help and Contact Information",
  description: "Boost your gym experience with FLEXPASS. Open 247 for relentless fitness journeys. Start now.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/contact-us',
  },
  openGraph: {
  title: "Contact Us - FLEXPASS Help and Contact Information",
  description: "Boost your gym experience with FLEXPASS. Open 247 for relentless fitness journeys. Start now.",
  },
};


//import Head from 'next/head';
import ContactUspage from './ContactUs'

// export default function ContactUs() {
//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://myflexpass.com/contact-us`} />
//       </Head>
//       <ContactUspage />
//     </>
//   );
// }

export default function ContactUs() {
  return <ContactUspage />;
}

