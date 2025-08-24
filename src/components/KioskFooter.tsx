"use client";
import React from "react";
import Image from "next/image";

export default function KioskFooter() {
  return (
    <footer className="glass-effect border-t border-white/20 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Image 
            src="/brand/EB Logo.png"
            alt="Employbridge"
            width={80}
            height={20}
            className="h-5 w-auto opacity-80"
          />
          <div className="text-white/60 text-xs">
            Need immediate help? Touch the Support button or call 1-800-EMPLOY
          </div>
        </div>
      </div>
    </footer>
  );
}
