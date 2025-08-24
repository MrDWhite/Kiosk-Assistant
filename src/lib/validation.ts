import { z } from "zod";

// Base employee schema
export const employeeSchema = z.object({
  employee_name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  employee_id: z.string().min(3, "Employee ID must be at least 3 characters").max(20, "Employee ID must be less than 20 characters"),
});

// Missed punch schema
export const missedPunchSchema = employeeSchema.extend({
  punch_type: z.enum(["clock_in", "clock_out", "lunch_in", "lunch_out"]),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  reason: z.string().min(10, "Reason must be at least 10 characters").max(500, "Reason must be less than 500 characters"),
});

// Time off request schema
export const timeOffSchema = employeeSchema.extend({
  request_type: z.enum(["vacation", "sick_leave", "personal_time", "other"]),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().min(1, "End date is required"),
  reason: z.string().min(10, "Reason must be at least 10 characters").max(500, "Reason must be less than 500 characters"),
});

// Support request schema
export const supportSchema = employeeSchema.extend({
  category: z.enum(["payroll", "benefits", "schedule", "technical", "other"]),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000, "Message must be less than 1000 characters"),
  priority: z.enum(["low", "medium", "high"]),
});

// Type exports
export type MissedPunchData = z.infer<typeof missedPunchSchema>;
export type TimeOffData = z.infer<typeof timeOffSchema>;
export type SupportData = z.infer<typeof supportSchema>;
export type EmployeeData = z.infer<typeof employeeSchema>;
