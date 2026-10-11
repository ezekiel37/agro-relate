import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  /** Label shown while loading, e.g. "Logging in...". Defaults to the normal label. */
  loadingText?: React.ReactNode;
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading = false, loadingText, disabled, children, ...props }, ref) => (
    <Button ref={ref} disabled={loading || disabled} aria-busy={loading} {...props}>
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
      {loading && loadingText ? loadingText : children}
    </Button>
  )
);
LoadingButton.displayName = "LoadingButton";

export { LoadingButton };
