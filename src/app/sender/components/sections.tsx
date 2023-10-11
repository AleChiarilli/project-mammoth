"use client";
import { Tabs, Box, Text } from "@radix-ui/themes";

export default function TabsCategories() {
  return (
    <>
      <Tabs.Root defaultValue="platillos">
        <Tabs.List className="flex justify-between px-20">
          <Tabs.Trigger value="platillos">PLATILLOS</Tabs.Trigger>
          <Tabs.Trigger value="bebidas">BEBIDAS</Tabs.Trigger>
          <Tabs.Trigger value="postres">POSTRES</Tabs.Trigger>
          <Tabs.Trigger value="extras">EXTRAS</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="platillos">
            <Text size="2">Make changes to your account.</Text>
          </Tabs.Content>

          <Tabs.Content value="bebidas">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="postres">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>

          <Tabs.Content value="extras">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </>
  );
}
