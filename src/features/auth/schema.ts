import z from "zod";
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Minimum 8 characrters required"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(3, "Required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Minimum 8 characters required"),
});
