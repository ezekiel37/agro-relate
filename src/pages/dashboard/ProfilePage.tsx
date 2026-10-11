import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FieldError from "@/components/auth/FieldError";
import TextField from "@/components/auth/TextField";
import { useAuth } from "@/context/AuthContext";
import { useMyProfile, useSaveProfile } from "@/hooks/use-dashboard";
import {
  Card,
  ErrorBlock,
  LoadingBlock,
  PageHeader,
} from "@/components/dashboard/shared";
import { ROLE_LABELS, primaryButton } from "@/lib/format";
import { ProfileValues, parseProducts, profileSchema } from "@/lib/validation";
import type { Profile, ProfileType } from "@/lib/api";
import { cn } from "@/lib/utils";

const TYPES: ProfileType[] = ["farmer", "buyer", "supplier"];

const toFormValues = (profile: Profile | null, fallbackType?: ProfileType): ProfileValues => ({
  type: profile?.type ?? fallbackType ?? "farmer",
  products: profile?.products?.join(", ") ?? "",
  description: profile?.description ?? "",
  location: profile?.location ?? "",
  phone: profile?.phone ?? "",
  website: profile?.website ?? "",
});

const ProfileForm: React.FC<{ profile: Profile | null }> = ({ profile }) => {
  const { user } = useAuth();
  const save = useSaveProfile(profile?.id);
  const fallbackType = user?.role && user.role !== "admin" ? user.role : undefined;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: toFormValues(profile, fallbackType),
    mode: "onTouched",
  });

  const selectedType = watch("type");

  const onSubmit = (values: ProfileValues) =>
    save.mutate(
      {
        type: values.type,
        products: parseProducts(values.products),
        description: values.description || undefined,
        location: values.location || undefined,
        phone: values.phone || undefined,
        website: values.website || undefined,
      },
      { onSuccess: (saved) => reset(toFormValues(saved)) }
    );

  return (
    <Card>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset className="space-y-2">
          <legend className="text-sm text-gray-700">I am a</legend>
          <div className="flex flex-wrap gap-2">
            {TYPES.map((type) => (
              <button
                key={type}
                type="button"
                aria-pressed={selectedType === type}
                onClick={() => setValue("type", type, { shouldDirty: true })}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  selectedType === type
                    ? "border-[#1E3C14] bg-[#1E3C14] text-white"
                    : "border-gray-300 text-gray-600 hover:border-gray-400"
                )}
              >
                {ROLE_LABELS[type]}
              </button>
            ))}
          </div>
          <FieldError message={errors.type?.message} />
        </fieldset>

        <div className="space-y-1">
          <TextField
            id="profile-products"
            label="Products"
            placeholder="maize, cassava, yam"
            error={errors.products?.message}
            {...register("products")}
          />
          <p className="text-xs text-gray-400">Separate products with commas.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="profile-description" className="text-sm text-gray-700">
            About you
          </label>
          <Textarea
            id="profile-description"
            placeholder="Tell others about your farm or business, experience and what you're looking for."
            className={cn(
              "min-h-[110px] rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400",
              errors.description && "border-red-500"
            )}
            {...register("description")}
          />
          <FieldError message={errors.description?.message} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="profile-location"
            label="Location"
            placeholder="Ibadan, Oyo State"
            error={errors.location?.message}
            {...register("location")}
          />
          <TextField
            id="profile-phone"
            label="Phone"
            type="tel"
            placeholder="+234 801 234 5678"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>

        <TextField
          id="profile-website"
          label="Website"
          type="url"
          placeholder="https://myfarm.com"
          error={errors.website?.message}
          {...register("website")}
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            className={primaryButton}
            disabled={save.isPending || (!!profile && !isDirty)}
          >
            {save.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {profile ? "Save changes" : "Create profile"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

const ProfilePage: React.FC = () => {
  const profile = useMyProfile();

  return (
    <>
      <PageHeader
        title="My Profile"
        description="This is what other farmers, buyers and suppliers see when they discover you."
      />
      {profile.isLoading ? (
        <LoadingBlock />
      ) : profile.isError ? (
        <ErrorBlock onRetry={() => profile.refetch()} />
      ) : (
        <ProfileForm profile={profile.data ?? null} />
      )}
    </>
  );
};

export default ProfilePage;
