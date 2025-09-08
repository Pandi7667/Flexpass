
import PageNotFound from '../pagenot/page';
import GymDetailsWrapper from './GymDetailsWrapper';

function sanitizeSlug(slug) {
    return slug?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

export async function generateStaticParams() {
  //console.log("Running generateStaticParams...");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/gym`);
  const gyms = await res.json();

  const params = gyms.data.map(gym => ({
    slug: gym.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
  }));

 // console.log("Generated params:", params);

  return params;
}

export async function generateMetadata({ params }) {
  const slugParam = params?.slug;
  const slug = sanitizeSlug(slugParam);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/gym`);
  const gyms = await res.json();

  const gym = gyms?.data?.find(g => sanitizeSlug(g.slug) === slug);

  return {
    title: gym?.metatitle || gym?.name || 'Gym Not Found',
    description: gym?.metadescription || gym?.description || 'No description available',
    alternates: {
      canonical: `https://myflexpass.com/${slug}`,
    },
  };
}


// Actual page component
export default async function GymDetailsPage({ params }) {
  const slug = sanitizeSlug(params?.slug);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/gym`);
  const gyms = await res.json();

  const gym = gyms?.data?.find((g) => sanitizeSlug(g.slug) === slug);

  if (!gym || !gym.id || !gym.name) {
  return <PageNotFound />; 
}

  return <GymDetailsWrapper gym={gym} slug={slug} />;
}




