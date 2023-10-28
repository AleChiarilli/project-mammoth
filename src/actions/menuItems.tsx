"use server";
import { PrismaClient } from "@prisma/client";
import type { MenuItem } from "@prisma/client";

const prisma = new PrismaClient();

export const getMenuItemsCategories = () =>
  prisma.menuItem.groupBy({ by: ["category"] });

export const getMenuItems = (category: MenuItem["category"]) =>
  prisma.menuItem.findMany({ where: { category } });

export const getSenderPage = (category: MenuItem["category"]) =>
  Promise.all([getMenuItemsCategories(), getMenuItems(category)] as const);
