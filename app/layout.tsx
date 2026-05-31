import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacey MacKinnon | Model Portfolio",
  description: "The official portfolio of model Jacey MacKinnon.",
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
