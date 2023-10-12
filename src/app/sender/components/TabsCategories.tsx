"use client";
import { Tabs, Box, Text, Button, Grid, ScrollArea } from "@radix-ui/themes";
import Image from "next/image";

export default function TabsCategories() {
  return (
    <>
      <Tabs.Root defaultValue="platillos" className="h-2/5">
        <Tabs.List className="flex justify-between px-20">
          <Tabs.Trigger value="platillos">PLATILLOS</Tabs.Trigger>
          <Tabs.Trigger value="bebidas">BEBIDAS</Tabs.Trigger>
          <Tabs.Trigger value="postres">POSTRES</Tabs.Trigger>
          <Tabs.Trigger value="extras">EXTRAS</Tabs.Trigger>
        </Tabs.List>

        <ScrollArea>
          <Tabs.Content
            value="platillos"
            className="grid grid-cols-4 justify-items-center gap-4 pt-2"
          >
            <Button variant="solid" color="orange" className="h-32 w-32">
              <div className="col flex-col">
                <p>Platillo</p>
                <Image
                  src="/public/Foto-platillo.jpg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <p>precio</p>
              </div>
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>
          </Tabs.Content>

          <Tabs.Content
            value="bebidas"
            className="grid grid-cols-4 justify-items-center gap-4 pt-2 "
          >
            <Button variant="solid" color="orange" className="h-32 w-32">
              <div className="col flex-col">
                <p>Platillo</p>
                <Image
                  src="/public/Foto-platillo.jpg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <p>precio</p>
              </div>
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>
          </Tabs.Content>

          <Tabs.Content
            value="postres"
            className="grid grid-cols-4 justify-items-center gap-4 pt-2 "
          >
            <Button variant="solid" color="orange" className="h-32 w-32">
              <div className="col flex-col">
                <p>Platillo</p>
                <Image
                  src="/public/Foto-platillo.jpg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <p>precio</p>
              </div>
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>
          </Tabs.Content>

          <Tabs.Content
            value="extras"
            className="grid grid-cols-4 justify-items-center pt-2 gap-4"
          >
            <Button variant="solid" color="orange" className="h-32 w-32">
              <div className="col flex-col">
                <p>Platillo</p>
                <Image
                  src="/public/Foto-platillo.jpg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <p>precio</p>
              </div>
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>

            <Button variant="solid" color="orange" className="h-32 w-32">
              Food
            </Button>
          </Tabs.Content>
        </ScrollArea>
      </Tabs.Root>
    </>
  );
}
