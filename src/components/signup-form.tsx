"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import * as Z from "zod";
// import { Fi } from "zod/v4/locales";
// zod schma
const fromSchema = Z.object({
  name: Z.string().min(2, "This Field is rquired").max(100),

  password: Z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(100),
  email: Z.email("Please enter a valid email address"),
});

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: fromSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          {/* Field group form shadcn */}
          <FieldGroup>
            {/* form.field formtantac form */}
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      id={field.name}
                      // id should be same as name for accessibility reasons it helps screen readers to associate the label with the input field
                      name={field.name}
                      type="text"
                      placeholder="Enter Your Name"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>

            {/* for email */}
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      id={field.name}
                      // id should be same as name for accessibility reasons it helps screen readers to associate the label with the input field
                      name={field.name}
                      type="email"
                      placeholder="Enter Your Email"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>

            {/* for email */}

            {/* for password */}
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      id={field.name}
                      // id should be same as name for accessibility reasons it helps screen readers to associate the label with the input field
                      name={field.name}
                      type="password"
                      placeholder="Enter Your Password"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>
            {/* for passwod */}
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        {" "}
        <Button form="login-form" type="submit">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
}
