"use client";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CardWrapper } from "@/components/auth/cardwrapper/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/messagepop/form-error";
import { FormSuccess } from "@/components/messagepop/form-succes";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const [isPending, startTranstion] = useTransition();


  const onSubmit = (values: z.infer<typeof LoginSchema>) =>{
    setError("");
    setSuccess("");
    startTranstion(()=>{
        login(values)
            .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            })
    });
}

  return (
    <CardWrapper
      headerLabel="Bem Vindo"
      backButtonHref="/register"
      backButtonLabel="Não tem uma conta?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Email"
                    type="email"
                  />
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
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="********"
                    aria-label="Digite sua senha"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
