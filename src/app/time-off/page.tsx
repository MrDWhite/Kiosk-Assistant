"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import KioskLayout from "@/components/KioskLayout";

export default function TimeOff() {
  const [formData, setFormData] = useState({
    employee_name: "",
    employee_id: "",
    request_type: "",
    start_date: "",
    end_date: "",
    total_hours: "",
    reason: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateHours = () => {
    if (formData.start_date && formData.end_date) {
      const start = new Date(formData.start_date);
      const end = new Date(formData.end_date);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      const hours = diffDays * 8; // Assuming 8 hour work days
      setFormData(prev => ({ ...prev, total_hours: hours.toString() }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual API call to create time off request
      // await TimeOffRequest.create(formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting time off request:", error);
      alert("Error submitting request. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <KioskLayout>
        <div className="min-h-screen pb-24">
          <div className="max-w-2xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Button 
                  variant="ghost" 
                  className="nav-button text-white hover:text-[#00EEBB] hover:bg-white/10 mr-4 p-3"
                  onClick={() => router.push("/")}
                >
                  <Calendar className="w-6 h-6" />
                </Button>
                <h1 className="text-3xl font-bold text-white">Request Submitted</h1>
              </div>
              
              <Button 
                onClick={() => router.push("/")}
                className="nav-button bg-[#00EEBB]/20 hover:bg-[#00EEBB]/30 text-white border border-white/20 px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </div>

            <Card className="glass-effect border-white/30 touch-button">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#00EEBB] to-[#00b2ff] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">Time Off Request Submitted!</h2>
                <p className="text-white/70 text-lg mb-6">
                  Your time off request has been sent to your supervisor for approval.
                  You&apos;ll receive notification once it&apos;s been processed.
                </p>
                
                <div className="bg-white/10 rounded-lg p-4 mb-6 touch-button">
                  <p className="text-white/80 text-sm">
                    <strong>Reference ID:</strong> TO-{Date.now().toString().slice(-6)}
                  </p>
                </div>

                <Button 
                  onClick={() => router.push("/")}
                  className="nav-button bg-[#00EEBB] hover:bg-[#00b2ff] text-white px-8 py-3 text-lg"
                >
                  Return to Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </KioskLayout>
    );
  }

  return (
    <KioskLayout>
      <div className="min-h-screen pb-24">
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Header with Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                className="nav-button text-white hover:text-[#00EEBB] hover:bg-white/10 mr-4 p-3"
                onClick={() => router.push("/")}
              >
                <Calendar className="w-6 h-6" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-white">Request Time Off</h1>
                <p className="text-white/70 mt-2">Submit your vacation, sick leave, or personal time request</p>
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

          {/* Form */}
          <Card className="glass-effect border-white/30 touch-button">
            <CardHeader className="border-b border-white/20">
              <CardTitle className="text-white flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00EEBB] to-[#00b2ff] rounded-lg flex items-center justify-center mr-3 shadow-md">
                  <Calendar className="w-4 h-4" />
                </div>
                Time Off Request Form
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
                      className="bg-white/10 border-white/30 text-white placeholder-white/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white mb-2 block">Employee ID *</Label>
                    <Input
                      value={formData.employee_id}
                      onChange={(e) => handleInputChange("employee_id", e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50"
                      placeholder="Enter your employee ID"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-2 block">Request Type *</Label>
                  <Select value={formData.request_type} onValueChange={(value) => handleInputChange("request_type", value)}>
                    <SelectTrigger className="bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="Select type of time off" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vacation">Vacation</SelectItem>
                      <SelectItem value="sick_leave">Sick Leave</SelectItem>
                      <SelectItem value="personal">Personal Day</SelectItem>
                      <SelectItem value="bereavement">Bereavement</SelectItem>
                      <SelectItem value="jury_duty">Jury Duty</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-white mb-2 block">Start Date *</Label>
                    <Input
                      type="date"
                      value={formData.start_date}
                      onChange={(e) => {
                        handleInputChange("start_date", e.target.value);
                        setTimeout(calculateHours, 100);
                      }}
                      className="bg-white/10 border-white/30 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white mb-2 block">End Date *</Label>
                    <Input
                      type="date"
                      value={formData.end_date}
                      onChange={(e) => {
                        handleInputChange("end_date", e.target.value);
                        setTimeout(calculateHours, 100);
                      }}
                      className="bg-white/10 border-white/30 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-2 block">Total Hours Requested</Label>
                  <Input
                    type="number"
                    value={formData.total_hours}
                    onChange={(e) => handleInputChange("total_hours", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/50"
                    placeholder="Will be calculated automatically"
                    readOnly
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Reason (Optional)</Label>
                  <Textarea
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 min-h-20"
                    placeholder="Additional details about your time off request"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => router.push("/")}
                    className="flex-1 border-white/30 text-white hover:bg-white/10 nav-button"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 bg-[#00EEBB] hover:bg-[#00b2ff] text-white nav-button"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </KioskLayout>
  );
}
