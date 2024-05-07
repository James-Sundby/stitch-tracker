import { Inter } from "next/font/google";
import { AuthContextProvider } from "./_utils/auth-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stitch Tracker",
  description: "Cross Stitch Project Manager",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="dim" lang="en">
      <body className={inter.className}>
        <AuthContextProvider>{children} </AuthContextProvider>
      </body>
    </html>
  );
}
