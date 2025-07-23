// app/partners/page.js (no "use client" here)

import GymMapClient from "./GymMapClient";

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

export default function PartnersPage() {
  return <GymMapClient />;
}
