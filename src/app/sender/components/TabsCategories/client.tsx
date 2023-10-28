"use client";
import { Tabs, Button, ScrollArea } from "@radix-ui/themes";
import Image from "next/image";
import DefaultImage from "../../../../../public/item_default.jpg";
import { getMenuItemsCategories } from "../../../../actions/menuItems";
import Link from "next/link";
import { MenuItem } from "@prisma/client";

export function MenuItemButton({ menuItem }: { menuItem: MenuItem }) {
  return (
    <Button variant="solid" color="orange" className="h-32 w-32">
      <div className="col flex-col">
        <p>{menuItem.name}</p>
        <Image
          src={DefaultImage}
          width={20}
          height={20}
          alt="Picture of the author"
        />
        <p>{menuItem.price}</p>
      </div>
    </Button>
  );
}

function TabsContent({
  children,
  category,
}: {
  children: React.ReactNode;
  category: string;
}) {
  return (
    <Tabs.Content
      value={category}
      className="grid grid-cols-4 justify-items-center gap-4"
    >
      {children}
    </Tabs.Content>
  );
}

export function TabsRoot({
  currentCategory,
  categories,
  children,
}: {
  currentCategory: string;
  categories: Awaited<ReturnType<typeof getMenuItemsCategories>>;
  children: React.ReactNode;
}) {
  return (
    <Tabs.Root className="h-2/5" value={currentCategory}>
      <Tabs.List className="flex justify-between px-20">
        {categories.map(({ category }) => (
          <Tabs.Trigger key={`${category}-tab`} value={category}>
            <Link href={`${category}`}>{category?.toLocaleUpperCase()}</Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <div className="mt-4">
        {categories.map(({ category }) => (
          <TabsContent key={`${category}-content`} category={category}>
            {children}
          </TabsContent>
        ))}
      </div>
    </Tabs.Root>
  );
}
