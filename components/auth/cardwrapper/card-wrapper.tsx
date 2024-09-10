"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { HeaderCard } from "@/components/auth/cardwrapper/header";
import { Social } from "@/components/auth/cardwrapper/social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;

};
export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,

}: CardWrapperProps) => {
    return (

        <Card >
            <CardHeader>
                <HeaderCard label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial &&(
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
                

        </Card>
    );
};