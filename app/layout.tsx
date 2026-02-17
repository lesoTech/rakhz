import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakhshanda Abidi | Akashic Channel & Conscious Living Coach",
  description:
    "Deep emotional and subconscious healing through Akashic guidance, shadow work and conscious living sessions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
