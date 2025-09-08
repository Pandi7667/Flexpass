
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
import FAQContent from './FAQContent';


export default function FAQContentPage() {
  return <FAQContent />;
}