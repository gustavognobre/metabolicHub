import { CardWrapper } from "@/components/auth/cardwrapper/card-wrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Bem Vindo"
      backButtonHref="/auth/register"
      backButtonLabel="Não tem uma conta?"
      showSocial
    >
      Formulário de Login
    </CardWrapper>
  );
}
