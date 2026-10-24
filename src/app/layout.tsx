import type { Metadata } from "next";
import { Merriweather,  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const merriweather = Merriweather({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Wanderlast | Discover Your Next Adventure",
  description:
    "Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable}  h-full antialiased`}
    >
      <body>
        <main>
          <Navbar/>
        {children}
        </main>

      </body>
    </html>
  );
}
