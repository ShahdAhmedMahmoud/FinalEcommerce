"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { schema } from "./forget.schema";
import { ForgetPasswordFormType } from "./ForgetPasswordFormType";
import { handleForgetPassword } from "./forget.action";

const ForgetPasswordForm = () => {
  const router = useRouter();

  const Rhfobj = useForm<ForgetPasswordFormType>({
    resolver: zodResolver(schema),
  });

  const { control, handleSubmit } = Rhfobj;

  async function mySubmit(data: ForgetPasswordFormType) {
    const resOutput = await handleForgetPassword(data);

    if (resOutput === true) {
      toast.success("Verification code sent successfully", { position: "top-right", duration: 3000 });
      router.push("/auth/verify");
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email: </FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>verify</Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgetPasswordForm;
