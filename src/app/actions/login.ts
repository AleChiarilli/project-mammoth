"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function loginAction(loginForm: FormData) {
  const Login = z.object({
    username: z.string(),
    password: z.string(),
  });

  const loginData = Login.parse({
    username: loginForm.get("username"),
    password: loginForm.get("password"),
  });

  const queryResult = await prisma.sender.findFirst({
    where: {
      username: loginData.username,
      password: loginData.password,
    },
  });

  // TODO: Create a categories table
  const firstMenuItem = await prisma.menuItem.findFirst({
    orderBy: { createdAt: "desc" },
  });

  if (queryResult) {
    return redirect(`/sender/${queryResult.id}/${firstMenuItem?.category}`);
  } else {
    return { message: "Invalid Credentials" };
  }
}
