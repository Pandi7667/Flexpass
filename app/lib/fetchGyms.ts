export async function fetchGyms() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/gym`, {
    cache: 'no-store',
  });
  return res.json();
}