import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakhshanda Abidi | Akashic Channel & Conscious Living Coach",
  description:
    "Deep emotional and subconscious healing through Akashic guidance, shadow work and conscious living sessions.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "GOUBdURGV_r5Vx32jcX8Dimcvnm0wAdVOcVUwenRio4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17961501954"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17961501954');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
