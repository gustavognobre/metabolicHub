"use client";
import * as z from "zod";
import {  RegisterSchema } from "@/schemas";
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
import { register } from "@/actions/register";
import { useState, useTransition, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  //Define os campos que serão utilizados nesse formulário
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword:"",
      name:"",
      gender:undefined,
      photo:"",
      dateBirth:"",

    },
  });


  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [activeTab, setActiveTab] = useState("register"); // Estado que define qual tela tem prevalencia no tabs, se mudar fica voltando pra login(ainda n sei o pq)
  const [isPending, startTranstion] = useTransition();

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTranstion(() => {
      register(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  // Redirect to /register when "register" tab is active
  useEffect(() => {
    if (activeTab === "account") {
      router.push("/login");
    }
  }, [activeTab, router]);

  return (
    <ScrollArea className="h-[calc(100vh-20rem)] flex items-center justify-center">
    <Tabs
      defaultValue="register"
      className="w-[400px] mt-4 mb-4"
      onValueChange={setActiveTab} // Atualiza a tela quando selecionada
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account" className="font-montserrat">
          Acesso
        </TabsTrigger>
        <TabsTrigger value="register" className="font-montserrat">
          Registro
        </TabsTrigger>
      </TabsList>

      <TabsContent value="register">
        <CardWrapper
          headerLabel="Crie a sua conta"
          backButtonHref="/login"
          backButtonLabel="Já tem uma conta?"
          showSocial
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Digite seu nome aqui"
                        aria-label="Campo destinado ao nome"
                      />
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirme sua senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="********"
                        aria-label="Confirme sua senh"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de nascimento</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder=""
                        aria-label="Sua Data de Nascimento"
                        type="date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gênero</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        {...field} 
                        value={field.value} // Passando o valor atual do campo
                        onValueChange={field.onChange} // Atualiza o valor quando um botão é selecionado
                        className="flex space-x-4"
                      >
                        {/* Masculino */}
                        <div className="flex items-center">
                          <RadioGroupItem value="Masculino" id="Masculino" />
                          <Label htmlFor="Masculino" className="ml-2">Masculino</Label>
                        </div>
                        {/* Feminino */}
                        <div className="flex items-center">
                          <RadioGroupItem value="Feminino" id="Feminino" />
                          <Label htmlFor="Feminino" className="ml-2">Feminino</Label>
                        </div>
                        {/* Outro */}
                        <div className="flex items-center">
                          <RadioGroupItem value="Outros" id="Outros" />
                          <Label htmlFor="Outros" className="ml-2">Outros</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="photo"
                
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Perfil</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        aria-label="Sua foto de Perfil"
                        type="file"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit" className="w-full">
                Criar uma conta
              </Button>
            </form>
          </Form>
        </CardWrapper>
      </TabsContent>
    </Tabs>
    </ScrollArea>
  );
}
