import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Achilles",
  description: "Personal website of Alan Achilles - developer, student, and entrepreneur",
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
