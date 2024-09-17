"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { HeaderCard } from "@/components/auth/cardwrapper/header";
import { Social } from "@/components/auth/cardwrapper/social";
import { BackButton } from "@/components/auth/cardwrapper/back-button";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex flex-auto items-center justify-center">
      <Link href="/" className="block">
        <Image
          src="/metabolichubnameframe.png"
          alt="MetabolicHub Logo"
          width={100}
          height={50}
          priority={true}
          className="object-contain h-12 w-auto transition-transform transform hover:scale-105"
        />
      </Link>
      </div>
      <CardHeader>
        <HeaderCard label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <hr className="border-t mb-4 border-gray-200" />

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
