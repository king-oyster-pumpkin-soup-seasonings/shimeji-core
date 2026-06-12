import type { Metadata } from "next";
import { Jersey_15, New_Tegomin } from "next/font/google";
import "./globals.css";

const jersey25 = Jersey_15({
  variable: "--font-jersey-25",
  subsets: ["latin"],
  weight: "400",
});

const newTegomin = New_Tegomin({
  variable: "--font-new-tegomin",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ricky Cuenza",
  description: "Portfolio of Ricky Cuenza, a programmer of web and mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jersey25.variable} ${newTegomin.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
