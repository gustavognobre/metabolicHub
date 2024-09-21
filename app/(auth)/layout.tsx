export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-fixed bg-[url('/bg-login-register-small.png')] lg:bg-[url('/bg-login-register.jpg')]"
    >
      {children}
    </div>
  );
}
