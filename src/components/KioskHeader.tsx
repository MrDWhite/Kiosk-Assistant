"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Home, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";


interface KioskHeaderProps {
  lng: string;
  setLng: (lang: string) => void;
}

export default function KioskHeader({ lng, setLng }: KioskHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const handleLanguageChange = () => {
    const newLang = lng === "en" ? "es" : "en";
    setLng(newLang);
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <header className="glass-effect border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={goHome}
            className="flex items-center cursor-pointer"
            aria-label="Go to home page"
            title="Go to home page"
          >
            <Image 
              src="/brand/EB Logo.png"
              alt="Employbridge"
              width={128}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </button>
          
          <div className="flex items-center space-x-3">
            {!isHomePage && (
                          <Button 
              onClick={goHome}
              className="nav-button bg-[#00EEBB]/20 hover:bg-[#00EEBB]/30 text-white border border-white/20 px-3 py-2 rounded-lg flex items-center space-x-2 text-sm"
              aria-label="Go to home page"
            >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            )}
            
            <div className="text-white/80 text-sm font-medium">
              {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
            
            <Button 
              onClick={handleLanguageChange}
              className="nav-button bg-white/10 hover:bg-white/20 text-white border border-white/20 p-2 rounded-lg"
              title={lng === "en" ? "Cambiar a Español" : "Switch to English"}
              aria-label={lng === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
            >
              <Languages className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
