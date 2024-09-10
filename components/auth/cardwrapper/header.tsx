interface HeaderProps{
    label: string;
 
};

export const HeaderCard = ({label,}: HeaderProps) => {
    return(
        <div className="w-full flex flex-col gap-y-4 items-center justify-center font-montserrat" >
            <h1 className="text-3xl font-semibold">
            {label}
            </h1>

        </div>
    )
}