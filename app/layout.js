import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Kabiraj Budha | Full-Stack Developer",
  description:
    "Hi, I’m Kabiraj Budha, a Full-Stack Developer building modern, responsive web apps with Next.js, React, Node.js, and MongoDB. I turn ideas into real products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth bg-[#e8deee] dark:bg-darkTheme">
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden bg-[#e8deee] dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
