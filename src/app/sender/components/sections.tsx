"use client";
import { Tabs, Box, Text, Button, Grid } from "@radix-ui/themes";
import Image from "next/image";

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

        <Box>
          <Tabs.Content value="platillos">
            <Grid columns="4" gap="6" width="auto">
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
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
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Food
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Food
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Food
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Food
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Food
                </Button>
              </Box>
            </Grid>
          </Tabs.Content>

          <Tabs.Content value="bebidas">
            <Grid columns="4" gap="6" width="auto">
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Bebidas
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Bebidas
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Bebidas
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Bebidas
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Bebidas
                </Button>
              </Box>
              <Box height="9">
                <Button variant="solid" color="orange" className="h-24 w-24">
                  Bebidas
                </Button>
              </Box>
            </Grid>
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
