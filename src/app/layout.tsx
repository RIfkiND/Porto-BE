
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";;

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Pilih weight yang diinginkan
  variable: "--font-jetbrains-mono", // CSS variable untuk Tailwind
});

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
      <body className={`${jetBrainsMono.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
}
