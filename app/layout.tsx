import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  absoluteUrl,
  primaryKeywords,
  regionalKeywords,
  siteConfig,
} from "@/lib/site-content";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...primaryKeywords, ...regionalKeywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        width: 1200,
        height: 630,
        alt: "Bitara Digital editorial website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: siteConfig.logo,
        type: "image/jpeg",
      },
    ],
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Analytics />
        <Script
          id="chatwoot-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(d,t) {
        var BASE_URL="https://ohsitapp-chatwoot.6ybj83.easypanel.host";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 'MttkcEwDYSLfJ5XVnVzD6LAw',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
    `,
          }}
        />
      </body>
    </html>
  );
}
