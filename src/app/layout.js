import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
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
      <body className={`${monaSans.variable} font-mona-sans   antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
