// app/pagenot/page.js
'use client';

import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 text-center">
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">Ooops!!! The page you are looking for is not found</div>
        <Link href="/home" className="btn btn-primary mt-0">
          Take me to Homepage
        </Link>
      </div>
    </div>
  );
}
