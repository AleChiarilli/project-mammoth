"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function loginAction(loginForm: FormData) {
  const Login = z.object({
    email: z.string(),
    password: z.string(),
  });

  const loginData = Login.parse({
    email: loginForm.get("email"),
    password: loginForm.get("password"),
  });

  const queryResult = await prisma.restaurant.findFirst({
    where: {
      email: loginData.email,
      password: loginData.password,
    },
  });

  if (queryResult) {
    return redirect("/sender/1");
  } else {
    return { message: "Invalid Credentials" };
  }
}
