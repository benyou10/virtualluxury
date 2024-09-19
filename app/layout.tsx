import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Lato({ weight: "300",subsets :['latin']});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-base-100 w-full overflow-hidden h-full px-4 ">
      <Navbar/>
      <div className="p-8"></div>
        {children}
        </div>
        </body>
       
    </html>
  );
}
