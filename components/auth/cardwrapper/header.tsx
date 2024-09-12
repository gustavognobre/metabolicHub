interface HeaderProps {
    label: string;
  }
  
  export const HeaderCard = ({ label }: HeaderProps) => {
    return (
      <div className="w-full flex flex-col gap-y-4 items-center justify-center font-montserrat">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-center">
          {label}
        </h1>
      </div>
    );
  };
  