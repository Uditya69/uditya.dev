import type { Metadata } from "next";
import "./globals.css";
import {Poppins,Sora} from 'next/font/google'
const sora=Sora({
  weight: ["400"],
  style:['normal'],
  subsets:['latin']
})
const poppins=Poppins({
  weight: ["400"],
  style:['normal'],
  subsets:['latin']
})

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
    <html lang="en" className="bg-black text-gray-300">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
