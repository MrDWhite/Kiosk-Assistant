"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, AlertCircle, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportMissedPunch from "@/components/ReportMissedPunch";

export default function TimeAttendance() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const router = useRouter();

  const services = [
    {
      id: "missed_punch",
      title: "Report Missed Punch",
      description: "Forgot to clock in/out? Report it here",
      icon: AlertCircle,
      color: "text-orange-400"
    },
    {
      id: "view_schedule", 
      title: "View Schedule",
      description: "Check your upcoming shifts",
      icon: Clock,
      color: "text-orange-400"
    },
    {
      id: "punch_history",
      title: "Punch History",
      description: "Review your recent time entries",
      icon: CheckCircle,
      color: "text-orange-400"
    }
  ];

  if (activeService === "missed_punch") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <ReportMissedPunch onBack={() => setActiveService(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              className="text-white hover:text-orange-400 hover:bg-white/10 mr-4 p-3 rounded-lg"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-orange-400">Time & Attendance</h1>
              <p className="text-white/70 mt-2">Manage your time tracking needs</p>
            </div>
          </div>
          
          <Button 
            onClick={() => router.push("/")}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
                onClick={() => {
                  if (service.id === "missed_punch") {
                    setActiveService("missed_punch");
                  } else {
                    alert("This feature will be available soon!");
                  }
                }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-6 h-6 ${service.color}`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold ${service.color} mb-2`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Information Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-8">
          <CardHeader>
            <CardTitle className="text-orange-400 flex items-center">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                <Clock className="w-4 h-4 text-orange-400" />
              </div>
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white/70 space-y-3">
            <p>• All time entries must be submitted within 48 hours</p>
            <p>• Missed punch reports require supervisor approval</p>
            <p>• Contact your site manager for schedule changes</p>
            <p>• Questions? Use the Help & Support section</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
