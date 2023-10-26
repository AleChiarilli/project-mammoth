"use server";
import { PrismaClient } from "@prisma/client";
import type { MenuItem } from "@prisma/client";

const prisma = new PrismaClient();

export const getMenuItemsCategories = async () =>
  prisma.menuItem.groupBy({ by: ["category"] });

export const getMenuItems = async (category: MenuItem["category"]) =>
  prisma.menuItem.findMany({ where: { category } });
