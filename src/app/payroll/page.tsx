"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import KioskLayout from "@/components/KioskLayout";

export default function Payroll() {
  const router = useRouter();

  return (
    <KioskLayout>
      <div className="min-h-screen pb-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header with Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                className="nav-button text-white hover:text-[#00EEBB] hover:bg-white/10 mr-4 p-3"
                onClick={() => router.push("/")}
              >
                <CreditCard className="w-6 h-6" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-white">Payroll Services</h1>
                <p className="text-white/70 mt-2">Manage your direct deposit, paycards, and paystubs</p>
              </div>
            </div>
            
            <Button 
              onClick={() => router.push("/")}
              className="nav-button bg-[#00EEBB]/20 hover:bg-[#00EEBB]/30 text-white border border-white/20 px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>

          {/* Coming Soon Card */}
          <Card className="glass-effect border-white/30 touch-button">
            <CardHeader className="border-b border-white/20">
              <CardTitle className="text-white flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00EEBB] to-[#0033EB] rounded-lg flex items-center justify-center mr-3 shadow-md">
                  <CreditCard className="w-4 h-4" />
                </div>
                Payroll Services
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00EEBB] to-[#0033EB] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">Coming Soon!</h2>
              <p className="text-white/70 text-lg mb-6">
                Payroll services features are currently under development. 
                For immediate assistance, please use the Help & Support section.
              </p>
              
              <Button 
                onClick={() => router.push("/support")}
                className="nav-button bg-[#00EEBB] hover:bg-[#00b2ff] text-white px-8 py-3 text-lg"
              >
                Get Help & Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </KioskLayout>
  );
}
