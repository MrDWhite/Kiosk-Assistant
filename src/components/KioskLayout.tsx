"use client";
import React from "react";
import { ensureI18n } from "@/lib/i18n";
import KioskHeader from "./KioskHeader";
import KioskFooter from "./KioskFooter";

interface KioskLayoutProps {
  children: React.ReactNode;
}

export default function KioskLayout({ children }: KioskLayoutProps) {
  const [lng, setLng] = React.useState<string>(
    typeof window !== "undefined"
      ? (document.cookie.match(/(?:^|; )locale=([^;]+)/)?.[1] ??
          process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en")
      : "en"
  );
  
  const i18n = ensureI18n(lng);

  React.useEffect(() => {
    i18n.changeLanguage(lng);
    document.cookie = `locale=${lng}; path=/; max-age=31536000`;
  }, [lng, i18n]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001166] via-[#143672] to-[#9933EB]">
      <KioskHeader lng={lng} setLng={setLng} />
      
      {/* Main Content */}
      <main className="relative">
        {children}
      </main>
      
      <KioskFooter />
    </div>
  );
}
