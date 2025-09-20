"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ForgetPassword = () => {
  const router = useRouter();

  return (
    <div className="mt-4 text-center">
      <Button
        variant="link"
        className="text-blue-600 underline cursor-pointer"
        onClick={() => router.push("/forgetPassword")}
      >
        Forgot Password?
      </Button>
    </div>
  );
};

export default ForgetPassword;
