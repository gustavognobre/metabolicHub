"use client";

import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-4 sm:flex-row flex-col">
      <Button
        size="lg"
        className="w-full sm:w-1/2 lg:w-6/12 xl:w-6/12"
        variant="outline"
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full sm:w-1/2 lg:w-6/12 xl:w-6/12"
        variant="outline"
      >
        <FaFacebook className="h-5 w-5" />
      </Button>
    </div>
  );
};
