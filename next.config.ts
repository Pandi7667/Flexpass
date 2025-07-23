// import type { NextConfig } from 'next';

//  const nextConfig: NextConfig = {
  
//   images: {
//     domains: ['myflexpass.com', 'swaramtech.in'],
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/special-promotions',
//         permanent: false,
//       },
//     ];
//   },
// };

// export default nextConfig;

// export const config = {
//   output: 'export',
// };

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/production/flexpass_next',
  // assetPrefix: '/production/flexpass_next',
  trailingSlash: true,
  images: {
    domains: ['myflexpass.com', 'swaramtech.in'],
    unoptimized: true, 
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/special-promotions',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;




// // next.config.js or next.config.ts

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   basePath: '/production/flexpass_next',
//   assetPrefix: '/production/flexpass_next/',
//   trailingSlash: true,
//   output: 'export',
//   images: {
//     domains: ['myflexpass.com', 'swaramtech.in'],
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/special-promotions',
//         permanent: false,
//       },
//     ];
//   },
// };

// export default nextConfig;


// import type { NextConfig } from 'next';

// /** @type {import('next').NextConfig} */
// const nextConfig: NextConfig = {
//   basePath: '/t',
//   assetPrefix: '/',
//   trailingSlash: true,
//   output: 'export',
//   images: {
//     unoptimized: true, 
//     domains: ['myflexpass.com', 'swaramtech.in'],
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/special-promotions',
//         permanent: false,
//       },
//     ];
//   },
// };

// export default nextConfig;


