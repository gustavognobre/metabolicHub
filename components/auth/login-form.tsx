"use client";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import { CardWrapper } from "@/components/auth/cardwrapper/card-wrapper";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/messagepop/form-error";
import { FormSuccess } from "@/components/messagepop/form-succes";

export default function LoginForm() {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver:zodResolver(LoginSchema),
    defaultValues:{
      email:"",
      password:"",
    }
  })

  const onSubmit= (values:z.infer<typeof LoginSchema>) =>{
    console.log(values);
  }

  return (
    <CardWrapper
      headerLabel="Bem Vindo"
      backButtonHref="/auth/register"
      backButtonLabel="Não tem uma conta?"
      showSocial
    >
      <Form {...form}>
        <form 
          onSubmit={ form.handleSubmit(onSubmit)}
          className="space-y-6">
            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}

            />
             <FormField 
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="********" 
                      aria-label="Digite sua senha"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}

            />
          <FormError message="Algo está errado com os seus acessos!"/>
          <FormSuccess message="Esta tudo certo, vamos lá!"/>
          <Button
            type="submit"
            className="w-full">
            Entrar
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
