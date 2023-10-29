"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEmployeesList() {
  return prisma.sender.findMany();
}

// TODO: Create a categories table
export async function getFirstMenuItemCategory() {
  return prisma.menuItem.findFirst({
    orderBy: { createdAt: "desc" },
  });
}
