import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stitch Tracker",
  description:
    "A cross stitch hobby management app built with Next.js, Tailwind CSS, and daisyUI.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="dracula" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
