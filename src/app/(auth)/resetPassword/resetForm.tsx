"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { schema } from "./reset.schema";
import { ResetFormType } from "./reset.types";
import { handleResetPassword } from "./reset.actions";

const ResetPasswordForm = () => {
  const router = useRouter();

  const Rhfobj = useForm<ResetFormType>({
    resolver: zodResolver(schema),
  
  });

  const { control, handleSubmit } = Rhfobj;

  async function mySubmit(data: ResetFormType) {
    const resOutput = await handleResetPassword(data);

    if (resOutput === true) {
      toast.success("Password reset successfully", { position: "top-right", duration: 3000 });
      router.push("/login");
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

          <FormField
            control={control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password: </FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Reset Password</Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
