import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Uditya Mandal",
  description: "Visit Uditya's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
