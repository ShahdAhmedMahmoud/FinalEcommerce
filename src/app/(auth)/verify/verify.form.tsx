"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { schema } from "./verify.schema";
import { VerifyFormType } from "./verify.type";
import { handleVerify } from "./verify.action";

const VerifyCodeForm = () => {
  const router = useRouter();

  const Rhfobj = useForm<VerifyFormType>({
    resolver: zodResolver(schema),
  
  });

  const { control, handleSubmit } = Rhfobj;

  async function mySubmit(data: VerifyFormType) {
    const resOutput = await handleVerify(data);

    if (resOutput === true) {
      toast.success("Code verified successfully", { position: "top-right", duration: 3000 });
      router.push("/resetPassword");
    } else {
      toast.error(resOutput, { position: "top-right", duration: 3000 });
    }
  }

  return (
    <div>
      <Form {...Rhfobj}>
        <form onSubmit={handleSubmit(mySubmit)}>
          <FormField
            control={control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification Code: </FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Verify</Button>
        </form>
      </Form>
    </div>
  );
};

export default VerifyCodeForm;
