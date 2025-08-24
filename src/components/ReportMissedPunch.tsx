"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Clock, CheckCircle, Home } from "lucide-react";

interface ReportMissedPunchProps {
  onBack: () => void;
}

export default function ReportMissedPunch({ onBack }: ReportMissedPunchProps) {
  const [formData, setFormData] = useState({
    employee_name: "",
    employee_id: "",
    punch_type: "",
    date: "",
    time: "",
    reason: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual API call to create missed punch
      // await MissedPunch.create(formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting missed punch:", error);
      alert("Error submitting request. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button variant="ghost" className="text-white hover:text-orange-400 hover:bg-white/10 mr-4 p-3 rounded-lg" onClick={onBack}>
                <ArrowLeft className="w-6 h-6" />
              </Button>
              <h1 className="text-3xl font-bold text-orange-400">Request Submitted</h1>
            </div>
            
            <Button 
              onClick={() => router.push("/")}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-orange-400" />
              </div>
              
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Request Received!</h2>
              <p className="text-white/70 text-lg mb-6">
                Your missed punch report has been submitted to your supervisor for approval.
                You&apos;ll receive notification once it&apos;s been processed.
              </p>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/80 text-sm">
                  <strong>Reference ID:</strong> MP-{Date.now().toString().slice(-6)}
                </p>
              </div>

              <Button onClick={onBack} className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 text-lg rounded-lg">
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button variant="ghost" className="text-white hover:text-orange-400 hover:bg-white/10 mr-4 p-3 rounded-lg" onClick={onBack}>
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-orange-400">Report Missed Punch</h1>
              <p className="text-white/70 mt-2">Fill out the form below to report a missed time entry</p>
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

        {/* Form */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader className="border-b border-white/20">
            <CardTitle className="text-orange-400 flex items-center">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                <Clock className="w-4 h-4 text-orange-400" />
              </div>
              Missed Punch Information
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-white mb-2 block">Full Name *</Label>
                  <Input
                    value={formData.employee_name}
                    onChange={(e) => handleInputChange("employee_name", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 rounded-lg"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label className="text-white mb-2 block">Employee ID *</Label>
                  <Input
                    value={formData.employee_id}
                    onChange={(e) => handleInputChange("employee_id", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 rounded-lg"
                    placeholder="Enter your employee ID"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-white mb-2 block">Punch Type *</Label>
                  <Select value={formData.punch_type} onValueChange={(value) => handleInputChange("punch_type", value)}>
                    <SelectTrigger className="bg-white/10 border-white/30 text-white rounded-lg">
                      <SelectValue placeholder="Select punch type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clock_in">Clock In</SelectItem>
                      <SelectItem value="clock_out">Clock Out</SelectItem>
                      <SelectItem value="lunch_in">Lunch In</SelectItem>
                      <SelectItem value="lunch_out">Lunch Out</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-white mb-2 block">Date *</Label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="bg-white/10 border-white/30 text-white rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-white mb-2 block">Time *</Label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="bg-white/10 border-white/30 text-white rounded-lg"
                  required
                />
              </div>

              <div>
                <Label className="text-white mb-2 block">Reason for Missing Punch *</Label>
                <Textarea
                  value={formData.reason}
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder-white/50 min-h-24 rounded-lg"
                  placeholder="Explain why you missed the punch (e.g., forgot to clock in, system was down, etc.)"
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onBack}
                  className="flex-1 border-white/30 text-white hover:bg-white/10 rounded-lg"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-orange-400 hover:bg-orange-500 text-white rounded-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
