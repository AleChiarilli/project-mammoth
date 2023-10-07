"use server";
import { z } from "zod";

export async function loginAction(loginForm: FormData) {
  const Login = z.object({
    email: z.string(),
    password: z.string(),
  });

  const loginData = Login.parse({
    email: loginForm.get("email"),
    password: loginForm.get("password"),
  });
}
