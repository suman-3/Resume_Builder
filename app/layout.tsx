import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNavBar } from "./components/TopNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "A resume builder and parser that simplifies and optimizes the job application process. Create or upload your resume effortlessly, letting the app handle formatting and tailoring. Elevate your career prospects with this game-changing tool for a polished and professional job application experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavBar />
        {children}
      </body>
    </html>
  );
}
