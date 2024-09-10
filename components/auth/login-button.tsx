"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode; //permite que o componente envolva ou rendenize outros componentes ou conteúdo passado para ele
  mode?: "modal" | "redirect"; // a ? mostra que o conteúdo não precisa ser repassado obrigatóriamente, mas se passada pode ser uma string que abre uma modal pra login ou redireciona para a tela de login
  asChild?: boolean; // indica se o componente pode se comportar como elemento filho ou não
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    console.log("Botão de Login Clicado");
    router.push("/login");
  };

  if (mode === "modal") {
    return <span>TODO: implementar a modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
