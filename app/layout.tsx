'use client';

//import type { Metadata } from "next";
//mport { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import NavbarMenu from './components/navbar/NavbarMenu';
//import Loader from './components/Loader';
import LayoutWrapper from './components/LayoutWrapper'
//import { useEffect, useState } from "react";
//import { useEffect, useState } from "react";
import { LoadingProvider, useLoading } from './context/LoadingContext';
import Loader from './components/Loader';
import LoaderResetter from './components/LoaderResetter';

import Script from 'next/script';

import GoogleMapsProvider from './components/GoogleMapsProvider'

import { usePathname } from 'next/navigation';


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTMID;
  const pathname = usePathname();
  const isErrorPage = pathname === '/pagenot';
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-${GTM_ID}'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-${GTM_ID}');
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11537152709"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-${GTM_ID}');
          `}
        </Script>
        <Script id="replace-no-js" strategy="afterInteractive">
          {`document.documentElement.className = document.documentElement.className.replace('no-js', 'js');`}
        </Script>
      </head>
      <body>

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div className="App container-fluid" id="main-content">
          <LoadingProvider>
            <GoogleMapsProvider>
              <LayoutWrapper>
                {!isErrorPage && <NavbarMenu />}
                <LoaderResetter />
                <MainContent>{children}</MainContent>
                {!isErrorPage && <Footer />}
              </LayoutWrapper>
            </GoogleMapsProvider>
          </LoadingProvider>
        </div>
      </body>
    </html>
  );
}
//const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
function MainContent({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}