"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
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
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(8, "Password length must be between 8 and 255 characters.")
    .max(255, "Password length must be between 8 and 255 characters."),
});

export default function RegisterPage() {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    startTransition(() => {
      axios
        .post("/api/auth/login", values)
        .then(({ data }) => {
          toast.success(data.message);
          router.push("/");
          dispatch(setUser(data.user));
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
            Login
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                Login
              </Button>
            </form>
          </Form>

          <div className="flex items-center gap-2">
            <div className="h-px flex-1 rounded-full bg-primary/60"></div>
            <p>Or</p>
            <div className="h-px flex-1 rounded-full bg-primary/60"></div>
          </div>

          <p className="text-center text-sm">
            Don&#39;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              register here
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
