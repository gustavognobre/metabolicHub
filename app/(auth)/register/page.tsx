import LoginForm from "@/components/auth/login-form";

const RegisterPage = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-screen">
      {/* Coluna esquerda */}
      <div className="hidden lg:block"></div>

      {/* Coluna direita */}
      <div className="flex flex-col justify-center items-center px-8 lg:px-16 h-screen lg:h-full">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
