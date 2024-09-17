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
import { useState, useTransition, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [activeTab, setActiveTab] = useState("account"); // State to track the active tab
  const [isPending, startTranstion] = useTransition();

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTranstion(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  // Redirect to /register when "register" tab is active
  useEffect(() => {
    if (activeTab === "register") {
      router.push("/register");
    }
  }, [activeTab, router]);

  return (
    <Tabs
      defaultValue="account"
      className="w-[400px] mt-4 mb-4"
      onValueChange={setActiveTab} // Update activeTab when a tab is clicked
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account" className="font-montserrat">
          Acesso
        </TabsTrigger>
        <TabsTrigger value="register" className="font-montserrat">
          Registro
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <CardWrapper
          headerLabel="Acesse a sua conta"
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
      </TabsContent>
    </Tabs>
  );
}
