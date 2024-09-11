"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { HeaderCard } from "@/components/auth/cardwrapper/header";
import { Social } from "@/components/auth/cardwrapper/social";
import { BackButton } from "@/components/auth/cardwrapper/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  showTabs?: boolean;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-4">
      <CardHeader>
        <HeaderCard label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
