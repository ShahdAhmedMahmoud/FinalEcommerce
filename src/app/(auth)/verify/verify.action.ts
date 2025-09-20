"use server";

export async function handleVerify(values: { resetCode: string }) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  return res.json();
}
