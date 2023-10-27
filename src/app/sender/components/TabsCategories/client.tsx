"use client";
import { Tabs, Button, ScrollArea } from "@radix-ui/themes";
import Image from "next/image";
import DefaultImage from "../../../../../public/item_default.jpg";
import { getMenuItems, getMenuItemsCategories } from "../../actions/menuItems";
import Link from "next/link";

export function TabsContent({
  items,
  category,
}: {
  items: Awaited<ReturnType<typeof getMenuItems>>;
  category: string;
}) {
  return (
    <Tabs.Content
      value={category}
      className="grid grid-cols-4 justify-items-center pt-2 gap-4"
    >
      {items.map((menuItem) => (
        <Button
          key={menuItem.id}
          variant="solid"
          color="orange"
          className="h-32 w-32"
        >
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
      ))}
    </Tabs.Content>
  );
}

export function TabsRoot({
  categories,
  children,
}: {
  categories: Awaited<ReturnType<typeof getMenuItemsCategories>>;
  children: React.ReactNode;
}) {
  return (
    <Tabs.Root className="h-2/5">
      <Tabs.List className="flex justify-between px-20">
        {categories.map(({ category }) => (
          <Link key={category} href={`${category}`}>
            <Tabs.Trigger value={category}>
              {category?.toLocaleUpperCase()}
            </Tabs.Trigger>
          </Link>
        ))}
      </Tabs.List>
      <ScrollArea>{children}</ScrollArea>
    </Tabs.Root>
  );
}
