import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import FieldError from "@/components/auth/FieldError";
import PasswordInput from "@/components/auth/PasswordInput";
import PasswordStrength from "@/components/auth/PasswordStrength";
import TextField from "@/components/auth/TextField";
import { useAuth } from "@/context/AuthContext";
import { ApiError, changePassword, updateMe } from "@/lib/api";
import {
  AccountValues,
  ChangePasswordValues,
  accountSchema,
  changePasswordSchema,
} from "@/lib/validation";
import {
  Card,
  PageHeader,
} from "@/components/dashboard/shared";
import { ROLE_LABELS, primaryButton } from "@/lib/format";

const AccountForm: React.FC = () => {
  const { user, setUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<AccountValues>({
    resolver: zodResolver(accountSchema),
    defaultValues: { name: user?.name ?? "", location: user?.location ?? "" },
  });

  const onSubmit = async (values: AccountValues) => {
    try {
      const updated = await updateMe({ name: values.name, location: values.location || undefined });
      setUser(updated);
      reset({ name: updated.name, location: updated.location ?? "" });
      toast.success("Account details saved.");
    } catch (err) {
      setError("root", {
        message: err instanceof ApiError ? err.message : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Card>
      <h2 className="text-sm font-600 text-gray-800">Account details</h2>
      <p className="mt-1 text-xs text-gray-500">
        {user?.email} · {user?.role ? ROLE_LABELS[user.role] : ""} account
      </p>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          id="account-name"
          label="Full Name"
          autoComplete="name"
          error={errors.name?.message}
          {...register("name")}
        />
        <TextField
          id="account-location"
          label="Location"
          placeholder="Lagos, Nigeria"
          error={errors.location?.message}
          {...register("location")}
        />
        <FieldError message={errors.root?.message} />
        <div className="flex justify-end">
          <Button type="submit" className={primaryButton} disabled={isSubmitting || !isDirty}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

const PasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordValues>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values: ChangePasswordValues) => {
    try {
      await changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.password,
      });
      reset({ currentPassword: "", password: "", confirmPassword: "" });
      toast.success("Password changed.");
    } catch (err) {
      if (err instanceof ApiError && /current password/i.test(err.message)) {
        setError("currentPassword", { message: err.message });
      } else {
        setError("root", {
          message: err instanceof ApiError ? err.message : "Something went wrong. Please try again.",
        });
      }
    }
  };

  return (
    <Card>
      <h2 className="text-sm font-600 text-gray-800">Change password</h2>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <PasswordInput
          id="current-password"
          label="Current Password"
          autoComplete="current-password"
          error={errors.currentPassword?.message}
          {...register("currentPassword")}
        />
        <PasswordInput
          id="settings-new-password"
          label="New Password"
          autoComplete="new-password"
          error={errors.password?.message}
          {...register("password")}
        />
        <PasswordInput
          id="settings-confirm-password"
          label="Confirm New Password"
          autoComplete="new-password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
        <PasswordStrength password={watch("password") ?? ""} />
        <FieldError message={errors.root?.message} />
        <div className="flex justify-end">
          <Button type="submit" className={primaryButton} disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update password"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

const Settings: React.FC = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="Settings" description="Manage your account and security." />
      <div className="grid gap-6 lg:grid-cols-2">
        <AccountForm />
        <PasswordForm />
      </div>
      <Card className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-600 text-gray-800">Sign out</h2>
          <p className="mt-1 text-xs text-gray-500">You'll need to log in again to access your dashboard.</p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            signOut();
            navigate("/login", { replace: true });
          }}
        >
          Sign out
        </Button>
      </Card>
    </>
  );
};

export default Settings;
