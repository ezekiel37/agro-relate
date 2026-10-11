import { z } from "zod";

// Mirrors the backend rules in /api-docs (name 2-100 chars, password >= 6).
export const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Enter a valid email address");

export const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters")
  .regex(/[A-Za-z]/, "Password must contain a letter")
  .regex(/[0-9]/, "Password must contain a number");

// A plain .refine() only runs once every other field is valid, so a password
// mismatch would stay hidden while e.g. the terms box is unticked. Validate the
// base object and the match together so both errors show at once.
const withConfirmedPassword = <T extends z.ZodRawShape>(shape: T) => {
  const base = z.object({
    ...shape,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  });

  return z.unknown().transform((data, ctx) => {
    const result = base.safeParse(data);
    const values = (data ?? {}) as { password?: string; confirmPassword?: string };

    if (values.confirmPassword && values.password !== values.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
    if (!result.success) {
      result.error.issues.forEach((issue) => ctx.addIssue(issue));
      return z.NEVER;
    }
    return result.data;
  });
};

export const signupSchema = withConfirmedPassword({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  email: emailSchema,
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms to continue" }),
  }),
});
export type SignupValues = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});
export type LoginValues = z.infer<typeof loginSchema>;

export const resetRequestSchema = z.object({ email: emailSchema });
export type ResetRequestValues = z.infer<typeof resetRequestSchema>;

export const newPasswordSchema = withConfirmedPassword({});
export type NewPasswordValues = z.infer<typeof newPasswordSchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: emailSchema,
  subject: z.string().trim().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});
export type ContactValues = z.infer<typeof contactSchema>;

/** 0-4 score used by the password strength bar. */
export const passwordStrength = (password: string) => {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
};

const optionalText = (max: number, label: string) =>
  z.string().trim().max(max, `${label} must be at most ${max} characters`).optional();

export const profileSchema = z.object({
  type: z.enum(["farmer", "buyer", "supplier"], {
    errorMap: () => ({ message: "Choose what best describes you" }),
  }),
  products: z
    .string()
    .trim()
    .min(1, "Add at least one product, e.g. maize, cassava"),
  description: optionalText(1000, "Description"),
  location: optionalText(100, "Location"),
  phone: z
    .string()
    .trim()
    .regex(/^$|^\+?[0-9 ()-]{7,20}$/, "Enter a valid phone number")
    .optional(),
  website: z
    .string()
    .trim()
    .regex(/^$|^https?:\/\/\S+\.\S+$/, "Enter a full URL starting with http:// or https://")
    .optional(),
});
export type ProfileValues = z.infer<typeof profileSchema>;

export const accountSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  location: optionalText(100, "Location"),
});
export type AccountValues = z.infer<typeof accountSchema>;

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Enter your current password"),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type ChangePasswordValues = z.infer<typeof changePasswordSchema>;

/** "maize, Cassava ,yam" -> ["maize", "cassava", "yam"] (deduplicated). */
export const parseProducts = (value: string) =>
  Array.from(
    new Set(
      value
        .split(",")
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean)
    )
  );
