import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { BrandProvider } from "@/components/BrandProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Employbridge Kiosk",
  description: "Self-service kiosk and admin portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <BrandProvider>{children}</BrandProvider>
      </body>
    </html>
  );
}
