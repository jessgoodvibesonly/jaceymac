import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jacey MacKinnon | Model Portfolio",
  description: "Official modeling portfolio of Jacey MacKinnon",
  icons: {
    icon: "/faviconJM.png",
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
