"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const registerFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name length must be between 3 and 255 characters.")
    .max(255, "Name length must be between 3 and 255 characters."),
  email: z.string().email({ message: "Invalid email!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(8, "Password length must be between 8 and 255 characters.")
    .max(255, "Password length must be between 8 and 255 characters."),
});

export default function RegisterPage() {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    startTransition(() => {
      axios
        .post("/api/auth/register", values)
        .then(({ data }) => {
          toast.success(data.message);

          router.push("/login");
        })
        .catch((err) => {
          toast.error(err.response.data.message || "An error occurred!");
        });
    });
  };

  return (
    <section className="py-20">
      <Card className="mx-auto mt-8 max-w-[30rem]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-secondary">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@doe.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isLoading} type="submit" className="w-full">
                Register
              </Button>
            </form>
          </Form>

          <div className="flex items-center gap-2">
            <div className="h-px flex-1 rounded-full bg-primary/60"></div>
            <p>Or</p>
            <div className="h-px flex-1 rounded-full bg-primary/60"></div>
          </div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
