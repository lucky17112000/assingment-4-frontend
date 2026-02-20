"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import * as Z from "zod";
import { signIn } from "@/service/auth";
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";

const fromDchema = Z.object({
  email: Z.email("Please enter a valid email address"),
  password: Z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(100),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: fromDchema,
    },
    onSubmit: async ({ value }) => {
      setServerError(null);
      setIsLoading(true);
      const res = await signIn(value);
      setIsLoading(false);
      if (res?.error || res?.message || res?.code) {
        setServerError(
          res.error ??
            res.message ??
            "Invalid email or password. Please try again.",
        );
        return;
      }
      if (res && !res.error) {
        router.push("/");
      }
    },
  });

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen w-full px-4",
        className,
      )}
      {...props}
    >
      <Card className="w-full max-w-md shadow-2xl border-0 rounded-3xl overflow-hidden">
        {/* Animated gradient header */}
        <div className="bg-linear-to-br from-violet-600 via-indigo-600 to-blue-500 px-6 pt-6 pb-5 text-white relative overflow-hidden">
          {/* Decorative blurred circles */}
          <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

          {/* Animated icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur mx-auto mb-3 shadow-lg animate-pulse">
            <LogIn className="w-6 h-6 text-white" />
          </div>

          <CardHeader className="p-0 text-center relative z-10">
            <CardTitle className="text-xl font-bold text-white tracking-tight">
              Welcome back
            </CardTitle>
            <CardDescription className="text-indigo-100 text-xs mt-1">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
        </div>

        {/* Form body */}
        <CardContent className="px-6 pt-5 pb-2 bg-white dark:bg-zinc-900">
          {/* Server error banner */}
          {serverError && (
            <div className="mb-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 px-4 py-3 text-sm text-red-600 dark:text-red-400 flex items-start gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup className="space-y-3">
              {/* Email field */}
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel
                        htmlFor={field.name}
                        className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide"
                      >
                        Email Address
                      </FieldLabel>
                      <div className="relative mt-1 group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-indigo-500 transition-colors duration-200" />
                        <Input
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          id={field.name}
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="pl-10 h-10 rounded-xl border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all duration-200"
                        />
                      </div>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              {/* Password field with show/hide toggle */}
              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <div className="flex items-center justify-between">
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide"
                        >
                          Password
                        </FieldLabel>
                        <a
                          href="/forgot-password"
                          className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative mt-1 group">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-indigo-500 transition-colors duration-200" />
                        <Input
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          id={field.name}
                          type={showPassword ? "text" : "password"}
                          placeholder="Min. 8 characters"
                          required
                          className="pl-10 pr-10 h-10 rounded-xl border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all duration-200"
                        />
                        {/* Animated eye toggle */}
                        <button
                          type="button"
                          onClick={() => setShowPassword((p) => !p)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-indigo-500 transition-colors duration-200 focus:outline-none"
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col gap-3 px-6 pb-6 pt-3 bg-white dark:bg-zinc-900">
          <Button
            type="submit"
            form="login-form"
            disabled={isLoading}
            className="w-full h-10 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-200 dark:shadow-indigo-900 transition-all duration-200 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Signing in...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Sign In
              </span>
            )}
          </Button>

          <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Create one
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
