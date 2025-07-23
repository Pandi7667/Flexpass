

export const metadata = {
  title: "AllGyms - Easy Fitness Routine Flexibility - FLEXPASS",
  description: "Join FLEXPASS to gain access to a wide variety of gym locations at your convenience, outbound or at home. Start your fitness journey with us today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://myflexpass.com/all-gyms',
  },
  openGraph: {
  title: "AllGyms - Easy Fitness Routine Flexibility - FLEXPASS",
  description: "Join FLEXPASS to gain access to a wide variety of gym locations at your convenience, outbound or at home. Start your fitness journey with us today.",

  },
};


import AllGyms from './AllGyms';


export default function AllGymsPage() {
  return <AllGyms />;
}

