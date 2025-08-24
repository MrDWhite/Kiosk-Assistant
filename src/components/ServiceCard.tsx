"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  onClick: () => void;
}

export default function ServiceCard({ title, description, icon: Icon, color, onClick }: ServiceCardProps) {
  return (
    <Card
      className="relative group cursor-pointer h-full overflow-hidden rounded-xl border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
      onClick={onClick}
    >
      {/* Gradient background and subtle overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-70`} />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative p-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>

        <p className="text-white/80 text-base leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center text-[#00EEBB] font-medium group-hover:translate-x-2 transition-transform">
          <span>Get Started</span>
          <ChevronRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Card>
  );
}
