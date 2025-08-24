"use client";
import React from "react";
import Image from "next/image";
import { 
  Clock, 
  Calendar, 
  Briefcase, 
  Heart, 
  CreditCard, 
  HelpCircle,
  User,
  MapPin
} from "lucide-react";

import KioskLayout from "@/components/KioskLayout";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Time & Attendance",
    description: "Report missed punches, view schedule",
    icon: Clock,
    page: "/time-attendance",
    color: "from-[#0033EB] to-[#3246F0]",
  },
  {
    title: "Time Off Requests",
    description: "Submit vacation or sick leave",
    icon: Calendar,
    page: "/time-off",
    color: "from-[#9933EB] to-[#00b2ff]",
  },
  {
    title: "Assignment Support",
    description: "Questions about your job",
    icon: Briefcase,
    page: "/assignment",
    color: "from-[#00EEBB] to-[#00b2ff]",
  },
  {
    title: "Benefits Information",
    description: "Health, dental, retirement plans",
    icon: Heart,
    page: "/benefits",
    color: "from-[#3246F0] to-[#9933EB]",
  },
  {
    title: "Payroll Services",
    description: "Direct deposit, paycards, paystubs",
    icon: CreditCard,
    page: "/payroll",
    color: "from-[#00EEBB] to-[#0033EB]",
  },
  {
    title: "Help & Support",
    description: "Contact HR or get assistance",
    icon: HelpCircle,
    page: "/support",
    color: "from-[#00b2ff] to-[#143672]",
  },
];

export default function Dashboard() {
  const handleServiceClick = (page: string) => {
    window.location.href = page;
  };

  return (
    <KioskLayout>
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="relative max-w-6xl mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How Can We Support You Today?
              </h1>

              {/* Center brand logos */}
              <div className="flex justify-center mb-4">
                <Image
                  src="brand/ebMax_Onsite_transparent.png"
                  alt="ebMax and On-site logos"
                  width={360}
                  height={90}
                  className="h-20 w-auto"
                  priority
                />
              </div>

              <p className="text-lg text-[#00EEBB] font-semibold mb-6">
                Part of the Team, Always Supported
              </p>
              <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
                Your digital assistant for employment services. Select a service below to get started.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative max-w-6xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                onClick={() => handleServiceClick(service.page)}
              />
            ))}
          </div>

          {/* Bottom Info Row */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-effect border-white/30 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00EEBB] to-[#00b2ff] rounded-lg flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Your Account</h4>
                  <p className="text-white/70 text-xs">All services require employee ID verification</p>
                </div>
              </div>
            </Card>

            <Card className="glass-effect border-white/30 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#9933EB] to-[#3246F0] rounded-lg flex items-center justify-center shadow-md">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">On-Site Support</h4>
                  <p className="text-white/70 text-xs">Available during your shift hours</p>
                </div>
              </div>
            </Card>

            <Card className="glass-effect border-white/30 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00b2ff] to-[#143672] rounded-lg flex items-center justify-center shadow-md">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Need Help?</h4>
                  <p className="text-white/70 text-xs">Touch any service for step-by-step guidance</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </KioskLayout>
  );
}
