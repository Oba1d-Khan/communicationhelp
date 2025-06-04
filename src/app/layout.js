import { Mona_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Personal Blog",
  description: "Welcome to my personal blog",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className="dark"     applies dark mode permanently
    >
      <body
        className={`${monaSans.variable} ${dmSerif.variable} font-dm-sans   antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
