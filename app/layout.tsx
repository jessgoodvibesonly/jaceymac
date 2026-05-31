import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JaceyMac | Model Portfolio",
  description:
    "The model portfolio of Jacey MacKinnon, based in Prince Edward Island, Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
