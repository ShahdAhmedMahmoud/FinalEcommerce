"use server";

export async function handleResetPassword(values: { email: string; newPassword: string }) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  return res.json();
}
